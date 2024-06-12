

document.getElementById('changeColorButton').addEventListener('click', function() {
    // Change background color
    document.body.classList.toggle('color-change');
    
    // Show the icon
    document.getElementById('rain').classList.toggle('hidden');
    // hide the button the msg
    document.getElementById('vanish').classList.toggle('hidden');
    // Show the img
    document.getElementById('img').classList.toggle('hidden');
    // Show the img
    document.getElementById('img1').classList.toggle('hidden');
    // Show the text
    document.getElementById('text').classList.toggle('hidden');


  });


  const audio = new Audio();
  audio.src="Tomake_Chai.mp3";

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.getElementsByClassName('play-button');
    const audioElements = document.getElementsByClassName('loop-audio');
    
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener('click', function() {
            const audio = audioElements[i];
            if (audio.paused) {
                audio.play();
               
            } else {
                audio.pause();
                
            }
        });
    }
});


  







