"use strict";

function html(code, apply) {
	let el = document.createElement("div");
	document.querySelector(apply).append(el);
	el.outerHTML = code;
	return html;
};
