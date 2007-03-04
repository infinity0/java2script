// mozilla.addon.js
// Following script will make J2SLib compatiable with Java2Script addon
function loadJ2SLibZJS (path, cb) {
	var sxr = document.createElement ("SCRIPT");
	sxr.src = path;
	sxr.type = "text/javascript";
	if (cb) {
		var t = "onreadystatechange";
		var xhrCallback = function () {
			var s = this.readyState;
			if (s == null || s == "loaded" || s == "complete") {
				window["j2s.lib"].onload ();
			}
		};
		if (typeof sxr[t] == "undefined") {
			sxr.onload = xhrCallback;
		} else {
			sxr[t] = xhrCallback;
		}
	}
	document.getElementsByTagName ("HEAD")[0].appendChild (sxr);
};
if (navigator.userAgent.toLowerCase ().indexOf ("gecko") != -1) {
	loadJ2SLibZJS("chrome://java2script/content/j2slib.js");
	window.setTimeout (function () {
		if (window["j2s.addon.loaded"]) return; // Loaded by Firefox addon!
		var o = window["j2s.lib"];
		if (o.base == null) {
			o.base = "http://archive.java2script.org/";
		}
		loadJ2SLibZJS(o.base + (o.alias ? o.alias : o.version) + "/j2slib.z.js", o.onload);
	}, 300); // with 0.3 second lag! 0.3 is enough for chrome://*.js to be loaded.
} else {
	var o = window["j2s.lib"];
	if (o.base == null) {
		o.base = "http://archive.java2script.org/";
	}
	loadJ2SLibZJS(o.base + (o.alias ? o.alias : o.version) + "/j2slib.z.js", o.onload);
}
