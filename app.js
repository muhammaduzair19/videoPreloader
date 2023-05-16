const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const video = document.querySelector('video');


function playVideo(){
    video.play();
    play.style.backgroundColor = 'White'
    pause.style.backgroundColor = 'Blue'
}
function pauseVideo(){
    video.pause();
    pause.style.backgroundColor = 'White'
    play.style.backgroundColor = 'Blue'
}