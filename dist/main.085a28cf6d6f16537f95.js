/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/cloud-rain.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/cloud-rain.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/cloud-rain.svg";

/***/ }),

/***/ "./src/assets/icons/cloud-snow.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/cloud-snow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/cloud-snow.svg";

/***/ }),

/***/ "./src/assets/icons/pause.svg":
/*!************************************!*\
  !*** ./src/assets/icons/pause.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/pause.svg";

/***/ }),

/***/ "./src/assets/icons/sun.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/sun.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/sun.svg";

/***/ }),

/***/ "./src/assets/rainy-bg.jpg":
/*!*********************************!*\
  !*** ./src/assets/rainy-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/rainy-bg.jpg";

/***/ }),

/***/ "./src/assets/sounds/rain.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/rain.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sounds/rain.mp3";

/***/ }),

/***/ "./src/assets/sounds/summer.mp3":
/*!**************************************!*\
  !*** ./src/assets/sounds/summer.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sounds/summer.mp3";

/***/ }),

/***/ "./src/assets/sounds/winter.mp3":
/*!**************************************!*\
  !*** ./src/assets/sounds/winter.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sounds/winter.mp3";

/***/ }),

/***/ "./src/assets/summer-bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/summer-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/summer-bg.jpg";

/***/ }),

/***/ "./src/assets/winter-bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/winter-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/winter-bg.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/sun.svg */ "./src/assets/icons/sun.svg");
/* harmony import */ var _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/cloud-rain.svg */ "./src/assets/icons/cloud-rain.svg");
/* harmony import */ var _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/cloud-snow.svg */ "./src/assets/icons/cloud-snow.svg");
/* harmony import */ var _assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/pause.svg */ "./src/assets/icons/pause.svg");
/* harmony import */ var _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/summer-bg.jpg */ "./src/assets/summer-bg.jpg");
/* harmony import */ var _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/rainy-bg.jpg */ "./src/assets/rainy-bg.jpg");
/* harmony import */ var _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/winter-bg.jpg */ "./src/assets/winter-bg.jpg");
/* harmony import */ var _assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sounds/summer.mp3 */ "./src/assets/sounds/summer.mp3");
/* harmony import */ var _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/sounds/rain.mp3 */ "./src/assets/sounds/rain.mp3");
/* harmony import */ var _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/sounds/winter.mp3 */ "./src/assets/sounds/winter.mp3");














const wrapper = document.getElementById("wrapper");
const soundsBlock = document.querySelectorAll(".sound-item");
const audioSummer = document.getElementById("audio-summer");
const audioRain = document.getElementById("audio-rain");
const audioWinter = document.getElementById("audio-winter");
const volumeRange = document.getElementById("volume-range");

const iconsBlock = document.querySelectorAll(".sound-item img");

const backgrounds = [_assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_7__];
const iconsImages = [_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_2__, _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_3__];
const musics = [_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__, _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__, _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__];

const musicItems = [audioSummer, audioRain, audioWinter];

iconsBlock.forEach((_, index) => {
	iconsBlock[index].src = iconsImages[index];
});

musicItems.forEach((_, index) => {
	musicItems[index].src = musics[index];
});

soundsBlock.forEach((block, index) => {
	block.addEventListener("click", () => {
		wrapper.style.backgroundImage = `url(${backgrounds[index]})`;
		musicItems.forEach((singleMusic, idx) => {
			if (index !== idx) singleMusic.pause();
		});
		if (musicItems[index].paused) {
			musicItems[index].play();
			iconsBlock[index].src = iconsImages[index];
		} else {
			musicItems[index].pause();
			iconsBlock[index].src = _assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_4__;
		}
	});
});

volumeRange.addEventListener("input", (event) => {
	const volumeValue = event.target.value / 10;

	musicItems.forEach((_, index) => {
		musicItems[index].volume = volumeValue;
	});
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wODVhMjhjZjZkNmYxNjUzN2Y5NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQjtBQUMwQjtBQUNNO0FBQ0Q7QUFDSjs7QUFFSDtBQUNGO0FBQ0U7O0FBRU87QUFDSDtBQUNHOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLGtEQUFRLEVBQUUsaURBQU8sRUFBRSxrREFBUTtBQUNoRCxxQkFBcUIsa0RBQVUsRUFBRSx5REFBUyxFQUFFLHlEQUFRO0FBQ3BELGdCQUFnQixzREFBVyxFQUFFLG9EQUFVLEVBQUUsdURBQVc7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsMkJBQTJCLG9EQUFTO0FBQ3BDO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWV4YW0vLi9zcmMvaW5kZXguc2Nzcz9mYWJmIiwid2VicGFjazovL3dlYnBhY2stZXhhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4YW0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4YW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4YW0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1leGFtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgU3VtbWVySWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvc3VuLnN2Z1wiO1xuaW1wb3J0IFJhaW55SWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2xvdWQtcmFpbi5zdmdcIjtcbmltcG9ydCBTaG93SWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmdcIjtcbmltcG9ydCBQYXVzZUljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3BhdXNlLnN2Z1wiO1xuXG5pbXBvcnQgU3VtbWVyQmcgZnJvbSBcIi4vYXNzZXRzL3N1bW1lci1iZy5qcGdcIjtcbmltcG9ydCBSYWlueUJnIGZyb20gXCIuL2Fzc2V0cy9yYWlueS1iZy5qcGdcIjtcbmltcG9ydCBXaW50ZXJCZyBmcm9tIFwiLi9hc3NldHMvd2ludGVyLWJnLmpwZ1wiO1xuXG5pbXBvcnQgU3VtbWVyTXVzaWMgZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCI7XG5pbXBvcnQgUmFpbnlNdXNpYyBmcm9tIFwiLi9hc3NldHMvc291bmRzL3JhaW4ubXAzXCI7XG5pbXBvcnQgV2ludGVyTXVzaWMgZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzXCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG5jb25zdCBzb3VuZHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc291bmQtaXRlbVwiKTtcbmNvbnN0IGF1ZGlvU3VtbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpby1zdW1tZXJcIik7XG5jb25zdCBhdWRpb1JhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvLXJhaW5cIik7XG5jb25zdCBhdWRpb1dpbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW8td2ludGVyXCIpO1xuY29uc3Qgdm9sdW1lUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZS1yYW5nZVwiKTtcblxuY29uc3QgaWNvbnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc291bmQtaXRlbSBpbWdcIik7XG5cbmNvbnN0IGJhY2tncm91bmRzID0gW1N1bW1lckJnLCBSYWlueUJnLCBXaW50ZXJCZ107XG5jb25zdCBpY29uc0ltYWdlcyA9IFtTdW1tZXJJY29uLCBSYWlueUljb24sIFNob3dJY29uXTtcbmNvbnN0IG11c2ljcyA9IFtTdW1tZXJNdXNpYywgUmFpbnlNdXNpYywgV2ludGVyTXVzaWNdO1xuXG5jb25zdCBtdXNpY0l0ZW1zID0gW2F1ZGlvU3VtbWVyLCBhdWRpb1JhaW4sIGF1ZGlvV2ludGVyXTtcblxuaWNvbnNCbG9jay5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xuXHRpY29uc0Jsb2NrW2luZGV4XS5zcmMgPSBpY29uc0ltYWdlc1tpbmRleF07XG59KTtcblxubXVzaWNJdGVtcy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xuXHRtdXNpY0l0ZW1zW2luZGV4XS5zcmMgPSBtdXNpY3NbaW5kZXhdO1xufSk7XG5cbnNvdW5kc0Jsb2NrLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xuXHRibG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRzW2luZGV4XX0pYDtcblx0XHRtdXNpY0l0ZW1zLmZvckVhY2goKHNpbmdsZU11c2ljLCBpZHgpID0+IHtcblx0XHRcdGlmIChpbmRleCAhPT0gaWR4KSBzaW5nbGVNdXNpYy5wYXVzZSgpO1xuXHRcdH0pO1xuXHRcdGlmIChtdXNpY0l0ZW1zW2luZGV4XS5wYXVzZWQpIHtcblx0XHRcdG11c2ljSXRlbXNbaW5kZXhdLnBsYXkoKTtcblx0XHRcdGljb25zQmxvY2tbaW5kZXhdLnNyYyA9IGljb25zSW1hZ2VzW2luZGV4XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXVzaWNJdGVtc1tpbmRleF0ucGF1c2UoKTtcblx0XHRcdGljb25zQmxvY2tbaW5kZXhdLnNyYyA9IFBhdXNlSWNvbjtcblx0XHR9XG5cdH0pO1xufSk7XG5cbnZvbHVtZVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcblx0Y29uc3Qgdm9sdW1lVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUgLyAxMDtcblxuXHRtdXNpY0l0ZW1zLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG5cdFx0bXVzaWNJdGVtc1tpbmRleF0udm9sdW1lID0gdm9sdW1lVmFsdWU7XG5cdH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=