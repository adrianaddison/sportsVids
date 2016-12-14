function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 window.onload = function () {
   // video
   var video = document.getElementById('video');

   // buttons
   var playButton = document.getElementById('play-pause');
   var muteButton = document.getElementById('mute');
   var fullScreenButton = document.getElementById('full-screen');

   // sliders
   var seekBar = document.getElementById('seek-bar');
   var volumeBar = document.getElementById('volume-bar');


  // Evern listener for the play/pause button
  playButton.addEventListener('click', function() {
    if (video.paused == true) {
      // play the video
      video.play();

      // update the button text to 'pause'
      playButton.innerHTML = 'Pause';
    } else {
      // pause the video
      video.pause();

      // update the button text to 'play'
      playButton.innerHTML = 'Play';
    }
  });

  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
    }
  });

  // Event listener for the full-screen button
  fullScreenButton.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });

  // Event listener for the seek bar
  seekBar.addEventListener('click', function() {
    // calculate the new time
    var time = video.duration * (seekBar.value/ 100);

    // update the video time
    video.currentTime = time;
  });

  // Update the seek bar as the video plays
  video.addEventListener('timeupdate', function() {
    // calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
  });

  // Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });

  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });

// Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
}
