let bgmusic = new Audio('bg3.mp3');
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById('mutebutt').innerText = "tap here to continue";
        
    } else {
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
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 700px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
  function opensecondinf(){
    document.getElementById('infomain2').style.animation = "openinfo2 3s forwards";
}
function mobilestart(){
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('bgvid').style.display = "block";
    document.getElementById('infomain').style.display = "flex";
    document.getElementById('infomain2').style.display = "block";
    bgmusic.play();
    document.getElementById('mutemobile').style.display = "inline";
    document.getElementById('mutebutt').style.display = "none";
}
function mutemobile(){
    if(bgmusic.paused){
        bgmusic.play();
    }
    else{
        bgmusic.pause();
    }
}
