const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $volumen = document.querySelector('#Volume')
const $videoTimeLapse = document.querySelector('#videoTimeLapse')
const $videoVolumenLapse = document.querySelector('#videoVolumenLapse')

$pause.hidden = true
$videoVolumenLapse.hidden = true

function handlePlay(){
    $video.play()
    $pause.hidden = false
    $play.hidden = true
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

function handleBackward(){
   $video.currentTime -= 10
}

function handleForward(){
    $video.currentTime += 10
}
   
function hanldeTime(){
    $videoTimeLapse.value = $video.currentTime
}
    
function handleTimeVideo(){
    $video.currentTime = $videoTimeLapse.value
}

function handleLoad(){
    $videoTimeLapse.max = $video.duration
}

function handleLoadVolumen(){
    $videoVolumenLapse.max = $video.volume*100
    $videoVolumenLapse.value = $video.volume*100
}

function handleVolumen(){
    $video.volume = parseFloat($videoVolumenLapse.value/100);
    $videoVolumenLapse.hidden = true
    $volumen.hidden = false
 }

 function handlebarVolumen(){
    $videoVolumenLapse.hidden = false
    $volumen.hidden = true
 }

 function actualizarInput(input) {
    var inputMin = $videoTimeLapse.getAttribute("min");
    var inputMax = $videoTimeLapse.getAttribute("max");
    var unidad = (inputMax - inputMin) / 100;
    input.style.setProperty("--value", (input.value - inputMin) / unidad);
}

$video.addEventListener('timeupdate', hanldeTime)
$pause.addEventListener('click', handlePause)
$play.addEventListener('click', handlePlay)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$videoTimeLapse.addEventListener('input', handleTimeVideo)
$video.addEventListener('loadedmetadata', handleLoad)
$video.addEventListener('loadedmetadata', handleLoadVolumen)
$videoVolumenLapse.addEventListener('change', handleVolumen)
$volumen.addEventListener('click', handlebarVolumen)
