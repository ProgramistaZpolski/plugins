"use strict";

function ajax(url, callback, json) {
	if (json) {
		fetch(url)
			.then(response => response.json())
			.then(data => callback(data))
			.catch(error => console.error(error));
	} else {
		fetch(url)
			.then(response => response.text())
			.then(data => callback(data))
			.catch(error => console.error(error));
	};
};
