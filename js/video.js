var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = video.volume * 100
	document.getElementById("volume").innerHTML = volume + "%"
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate * 0.95

	
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate)
	video.playbackRate = video.playbackRate * 1.05

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime)
	video.currentTime = video.currentTime + 15

	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	
	
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted)
	
	if (video.muted == true) {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"

	}
	else if (video.muted == false ) {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
		
	}
	

});

document.querySelector('#slider').addEventListener("click", function() {
	console.log(this)
	console.log(this.value)

	var vol = this.value

	video.volume = vol / 100
	document.getElementById("volume").innerHTML = vol + "%"




});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log('Old School')
	video.classList.add('oldSchool')
});

document.querySelector('#orig').addEventListener('click', function() {
	console.log('Original')
	video.classList.remove('oldSchool')
});

