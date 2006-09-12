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

package net.sf.j2s.test.swt.os;

import org.eclipse.swt.graphics.Rectangle;

/**
 * To be copied as class org.eclipse.swt.internal.browser.Popup
 *  
 * @author josson smith
 *
 * 2006-9-12
 */
public class Popup {

	/**
	 * Popup a given height box near the given rectangle box in the constrainted bounds.
	 * The popup box is in the same width of give rectangle box.
	 * 
	 * @param bounds
	 * @param rect
	 * @param height
	 * @return
	 */
	public static Rectangle popupList(Rectangle bounds, Rectangle rect, int height) {
		if (height <= 0) {
			return null;
		}
		int x, y, w, h = height;
		if (bounds == null) {
			if (rect == null) {
				x = y = 0;
				w = 100;
			} else {
				x = rect.x;
				y = rect.y + height;
				w = rect.width;
			}
		} else {
			if (rect == null) {
				x = bounds.x + bounds.width / 4;
				y = bounds.y + (bounds.height - height) / 2;
				w = bounds.width / 2;
			} else {
				x = rect.x;
				w = rect.width;
				if (rect.y + rect.height + height > bounds.y + bounds.height) {
					if (rect.y - height >= bounds.y) {
						y = rect.y - height;
					} else {
						if (bounds.height < height) {
							y = bounds.y;
							h = bounds.height;
						} else {
							if (Math.abs(bounds.y + bounds.height - height - rect.y) > Math.abs(bounds.y + height - rect.y - rect.height)) {
								y = bounds.y;
							} else {
								y = bounds.y + bounds.height - height;
							}
						}
					}
				} else {
					y = rect.y + rect.height;
				}
			}
		}
		return new Rectangle(x, y, w, h);
	}
	
}
