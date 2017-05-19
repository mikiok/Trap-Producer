function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!audio) return;
	if(audio.currentTime > 0){
		audio.pause();
		audio.currentTime = 0;
	}
	else {
		const audios = document.querySelectorAll(`audio[data-type="${audio.getAttribute("data-type")}"]`);
		audios.forEach(function(audio){
			audio.currentTime = 0;
			audio.pause();
		});
		audio.play();
	}
}


function addTransition(e){
	var key = this.getAttribute("data-key");
  var element = document.querySelector(`.key[data-key="${key}"]`)
  element.classList.add('playing');
}
function removeTransition(e){
	var key = this.getAttribute("data-key");
  var element = document.querySelector(`.key[data-key="${key}"]`)
  element.classList.remove('playing');
}

const audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.addEventListener('play', addTransition));
audios.forEach(audio => audio.addEventListener('ended', removeTransition));
audios.forEach(audio => audio.addEventListener('pause', removeTransition));

window.addEventListener('keydown', playSound);

