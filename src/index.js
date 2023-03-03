import "./index.scss";
import SummerIcon from "./assets/icons/sun.svg";
import RainyIcon from "./assets/icons/cloud-rain.svg";
import ShowIcon from "./assets/icons/cloud-snow.svg";
import PauseIcon from "./assets/icons/pause.svg";

import SummerBg from "./assets/summer-bg.jpg";
import RainyBg from "./assets/rainy-bg.jpg";
import WinterBg from "./assets/winter-bg.jpg";

import SummerMusic from "./assets/sounds/summer.mp3";
import RainyMusic from "./assets/sounds/rain.mp3";
import WinterMusic from "./assets/sounds/winter.mp3";

const wrapper = document.getElementById("wrapper");
const soundsBlock = document.querySelectorAll(".sound-item");
const audioSummer = document.getElementById("audio-summer");
const audioRain = document.getElementById("audio-rain");
const audioWinter = document.getElementById("audio-winter");
const volumeRange = document.getElementById("volume-range");

const iconsBlock = document.querySelectorAll(".sound-item img");

const backgrounds = [SummerBg, RainyBg, WinterBg];
const iconsImages = [SummerIcon, RainyIcon, ShowIcon];
const musics = [SummerMusic, RainyMusic, WinterMusic];

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
			iconsBlock[index].src = PauseIcon;
		}
	});
});

volumeRange.addEventListener("input", (event) => {
	const volumeValue = event.target.value / 10;

	musicItems.forEach((_, index) => {
		musicItems[index].volume = volumeValue;
	});
});
