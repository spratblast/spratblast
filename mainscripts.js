let bgmusic = new Audio('bg3.mp3');
document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('bgvid').style.display = "block";
    document.getElementById('infomain').style.display = "flex";
    document.getElementById('infomain2').style.display = "block";
    bgmusic.play();
    document.getElementById('mutebutt').innerText = "press M to mute/play";
}
});
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyM') {
        if(bgmusic.paused){
            bgmusic.play();
        }
        else{
            bgmusic.pause();
        }
    }
});
function opensecondinf(){
    document.getElementById('infomain2').style.animation = "openinfo2 3s forwards";
}

