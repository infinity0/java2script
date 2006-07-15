/*******************************************************************************
 * Java2Script Pacemaker (http://j2s.sourceforge.net)
 *
 * Copyright (c) 2006 ognize.com and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     ognize.com - initial API and implementation
 *******************************************************************************/

package org.eclipse.swt.internal.dnd;

import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.internal.xhtml.Element;
import org.eclipse.swt.internal.xhtml.document;


/**
 * @author Soheil Hassas Yeganeh
 *
 * 2006-7-1
 */
public class TableColumnDND extends DragAdapter {
	protected int sourceX = 0;
	protected Element thumb;
	public boolean dragBegan(DragEvent e) {
		thumb = document.createElement ("DIV");
		String cssName = e.sourceElement.className;
		thumb.className = cssName;
		if (cssName != null && cssName.indexOf ("sash-mouse-down") == -1)  {
			thumb.className += " sash-mouse-down";
		}
		thumb.style.left = e.sourceElement.style.left;
		thumb.style.top = e.sourceElement.style.top;
		thumb.style.width = e.sourceElement.style.width;
		thumb.style.height = e.sourceElement.style.height;
		thumb.onselectstart = DNDUtils.onselectstart;
		if (e.sourceElement.nextSibling != null) {
			e.sourceElement.parentNode.insertBefore (thumb, 
					e.sourceElement.nextSibling);
		} else {
			e.sourceElement.parentNode.appendChild (thumb);
		}

		this.sourceX = Integer.parseInt (e.sourceElement.style.left);
		/* first time, set start location to current location */
		e.startX = e.currentX;
		return true;
	}
	public boolean dragCanceled(DragEvent e) {
		clean();
		return true;
	}

	public boolean dragEnded(DragEvent e) {
		clean();
		return true;
	}

	protected void clean() {
		thumb.style.display = "none";
		document.body.style.cursor = "auto";
		thumb.parentNode.removeChild(thumb);
	}

	protected Point currentLocation(DragEvent e) {
		int xx = this.sourceX + e.deltaX ();
		
		int gWidth = Integer.parseInt(e.sourceElement.parentNode.style.width);
		/*
		 * On mozilla, the mousemove event can contain mousemove
		 * outside the browser window, so make bound for the dragging.
		 */
		int dWidth = Integer.parseInt(e.sourceElement.style.width);
		if (xx < 0) {
			xx = 0;
		} else if (xx > gWidth - dWidth - 2) {
			xx = gWidth - dWidth - 2;
		}
		return new Point(xx, 0);
	}
	
	public boolean dragging(DragEvent e) {
		document.body.style.cursor = "e-resize";
		thumb.style.cursor = "e-resize";
		thumb.style.left = currentLocation(e).x + "px";
		return true;
	}


}
