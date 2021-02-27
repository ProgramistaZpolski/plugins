"use strict";

function $d(name, equals) {
	return equals ? document.querySelector(`[data-${name}="${equals}"]`) : document.querySelector(`[data-${name}]`);
};
