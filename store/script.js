"use strict";

function store(name, value) {
	if (name && value === "") {
		localStorage.removeItem(name);
	} else if (name && value) {
		localStorage.setItem(name, value);
	} else if (name) {
		return localStorage.getItem(name);
	} else {
		localStorage.clear();
	};
};
