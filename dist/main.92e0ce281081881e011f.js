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

module.exports = __webpack_require__.p + "assets/icons/cloud-rain.svg";

/***/ }),

/***/ "./src/assets/icons/cloud-snow.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/cloud-snow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/cloud-snow.svg";

/***/ }),

/***/ "./src/assets/icons/pause.svg":
/*!************************************!*\
  !*** ./src/assets/icons/pause.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/pause.svg";

/***/ }),

/***/ "./src/assets/icons/sun.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/sun.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/sun.svg";

/***/ }),

/***/ "./src/assets/rainy-bg.jpg":
/*!*********************************!*\
  !*** ./src/assets/rainy-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rainy-bg.jpg";

/***/ }),

/***/ "./src/assets/sounds/rain.mp3":
/*!************************************!*\
  !*** ./src/assets/sounds/rain.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/rain.mp3";

/***/ }),

/***/ "./src/assets/sounds/summer.mp3":
/*!**************************************!*\
  !*** ./src/assets/sounds/summer.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/summer.mp3";

/***/ }),

/***/ "./src/assets/sounds/winter.mp3":
/*!**************************************!*\
  !*** ./src/assets/sounds/winter.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/winter.mp3";

/***/ }),

/***/ "./src/assets/summer-bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/summer-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/summer-bg.jpg";

/***/ }),

/***/ "./src/assets/winter-bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/winter-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/winter-bg.jpg";

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
//# sourceMappingURL=main.92e0ce281081881e011f.js.map