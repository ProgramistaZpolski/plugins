"use strict";

HTMLElement.prototype.toggle = function () {
	if (this.style.display == "none") {
		this.style.display = "block";
	} else {
		this.style.display = "none";
	};
};
