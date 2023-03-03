import "./index.scss";

const wrapper = document.getElementById("wrapper");
const soundsBlock = document.querySelectorAll(".sound-item");
const audioSummer = document.getElementById("audio-summer");
const audioRain = document.getElementById("audio-rain");
const audioWinter = document.getElementById("audio-winter");
const volumeRange = document.getElementById("volume-range");

const backgrounds = ["summer-bg.jpg", "rainy-bg.jpg", "winter-bg.jpg"];
const music = [audioSummer, audioRain, audioWinter];

soundsBlock.forEach((block, index) => {
	block.addEventListener("click", () => {
		wrapper.style.backgroundImage = `url('./assets/${backgrounds[index]}')`;
		music.forEach((singleMusic, idx) => {
			if (index !== idx) singleMusic.pause();
		});
		if (music[index].paused) {
			music[index].play();
		} else {
			music[index].pause();
		}
	});
});

volumeRange.addEventListener("input", (event) => {
	const volumeValue = event.target.value / 10;

	music.forEach((_, index) => {
		music[index].volume = volumeValue;
	});
});
