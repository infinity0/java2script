/*******************************************************************************
 * Copyright (c) 2005 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
package org.eclipse.core.internal.content;

/**
 * A common abstract view for lazy character/binary input streams.
 * 
 * @since 3.1
 */
public interface ILazySource {
	/**
	 * @return a boolean indicating whether this stream is character or byte-based 
	 */
	public boolean isText();

	/**
	 * Rewinds the stream.
	 */
	public void rewind();
}
