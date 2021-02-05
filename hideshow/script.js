"use strict";

HTMLElement.prototype.hide = function () {
	this.style.display = "none";
};
HTMLElement.prototype.show = function (mode) {
	this.style.display = mode ?? "block";
};
