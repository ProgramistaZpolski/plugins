"use strict";
function sieciuchy(asset, loadContainer) {
	function noLoadContainer() {
		if (!loadContainer) {
			throw new Error("Sieciuchy - Load container not specified");	
		};
	};

	const sieciuchyData = {
		"css": () => {
			const el = document.createElement("link");
			el.href = asset;
			el.rel = "stylesheet";
			document.head.appendChild(el);
			return el;
		},
		"js": () => {
			const el = document.createElement("script");
			el.src = asset;
			el.async = true;
			el.defer = true;
			document.body.appendChild(el);
			return el;
		},
		"mp4": () => {
			noLoadContainer();
			const el = document.createElement("video");
			el.src = asset;
			el.controls = true;
			el.autoplay = true;
			document.querySelector(loadContainer).appendChild(el);
			return el;
		},
		"webm": this.mp4,
		"mp3": () => {
			const el = document.createElement("audio");
			el.src = asset;
			el.controls = true;
			el.autoplay = true;
			document.body.appendChild(el);
			return el;
		},
		"weba": this.mp3,
		"ogg": this.mp3,
		"swf": () => {
			noLoadContainer();
			const el = document.createElement("embed");
			el.src = asset;
			el.type = "application/x-shockwave-flash";
			document.querySelector(loadContainer).appendChild(el);
			return el;
		}
	}; 
	
	if (!asset) {
		throw new Error("Sieciuchy - No asset specified");
	};

	const fileData = asset.split(".");

	if (!sieciuchyData[fileData[fileData.length - 1]]) {
		throw new Error("Sieciuchy - File format not recognized");	
	} else {
		return sieciuchyData[fileData[fileData.length - 1]]();
	};
};
