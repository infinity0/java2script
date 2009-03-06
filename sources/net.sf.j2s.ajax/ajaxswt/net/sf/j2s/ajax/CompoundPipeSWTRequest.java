package net.sf.j2s.ajax;

import java.util.Date;

import org.eclipse.swt.widgets.Display;


public class CompoundPipeSWTRequest extends SimplePipeRequest {
	
	private static SimplePipeHelper.IPipeClosing pipeClosingWrapper;
	private static CompoundPipeRunnable pipe;

	public static void swtWeave(String id, final CompoundPipeSession p) {
		/**
		 * // For JavaScript, there is no need to wrap SWT context 
		 * @j2sNative
		 */
		{
			if (pipeClosingWrapper == null) {
				pipeClosingWrapper = new SimplePipeHelper.IPipeClosing() {
					
					public void helpClosing(final SimplePipeRunnable pipe) {
						SWTHelper.syncExec(Display.getDefault(), new Runnable() {
							public void run() {
								pipe.pipeClosed();
							}
						});
					}
					
				};
			}
			p.setPipeCloser(pipeClosingWrapper);
		}
		
		CompoundPipeRunnable pipe = CompoundPipeRequest.retrievePipe(id, false);
		if (pipe == null) {
			pipe = CompoundPipeRequest.registerPipe(createSWTWrappedPipe(id));
		}
		if (pipe.status == 0 || !pipe.isPipeLive()) {
			pipe.weave(p);
			pipe.updateStatus(true);
			SimplePipeSWTRequest.swtPipe(pipe);
			pipe.status = 1; // pipe
		} else {
			pipe.weave(p);
			if (pipe.pipeKey != null) {
				p.pipeKey = pipe.pipeKey;
				SimpleRPCSWTRequest.swtRequest(p);
				if (pipe.status < 2) {
					pipe.status = 2; // requested
				}
			}
		}
	}

	private static CompoundPipeRunnable createSWTWrappedPipe(String id) {
		CompoundPipeRunnable pipe = new CompoundPipeRunnable() {
			
			@Override
			public void ajaxOut() {
				super.ajaxOut();
				for (int i = 0; i < pipes.length; i++) {
					if (pipes[i] != null) {
						pipes[i].pipeKey = pipeKey;
						SimpleRPCSWTRequest.swtRequest(pipes[i]);
						if (status < 2) {
							status = 2; // requested
						}
					}
				}
			}
			
			@Override
			public void ajaxFail() {
				CompoundPipeSWTRequest.pipeFailed(this);
			}
		
		};
		pipe.id = id;
		return pipe;
	}
	
	static void pipeFailed(CompoundPipeRunnable pipe) {
		long now = new Date().getTime();
		if (now - pipe.lastSetupRetried > 5 * 60 * 1000) { // five minutes
			pipe.setupFailedRetries = 0;
		}
		pipe.setupFailedRetries++;
		if (pipe.setupFailedRetries <= 3) {
			pipe.updateStatus(true);
			pipe.lastSetupRetried = now;
			SimplePipeSWTRequest.swtPipe(pipe);
		} else {
			for (int i = 0; i < pipe.pipes.length; i++) {
				if (pipe.pipes[i] != null) {
					pipe.pipes[i].pipeFailed();
				}
				pipe.pipes[i] = null;
			}
			CompoundPipeRequest.unregisterPipe(pipe.id);
		}
	}
	
	public static void configure(String id, String pipeURL, String pipeMethod,
			String rpcURL, String rpcMethod) {
		pipe = CompoundPipeRequest.retrievePipe(id, false);
		if (pipe == null) {
			pipe = createSWTWrappedPipe(id);
		}
		if (pipeURL != null) {
			pipe.pipeURL = pipeURL;
		}
		if (pipeMethod != null) {
			pipe.pipeMethod = pipeMethod;
		}
		if (rpcURL != null) {
			pipe.rpcURL = rpcURL;
		}
		if (rpcMethod != null) {
			pipe.rpcMethod = rpcMethod;
		}
	}

}