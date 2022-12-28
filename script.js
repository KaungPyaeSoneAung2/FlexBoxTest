function liked() {
  var img = document.getElementById("like-img");
  if(img.src.match('./assets/heartBlack.svg')){
    img.src='./assets/heartRed.svg'
  }
  else{
    img.src='./assets/heartBlack.svg'
  }
}
function playPause() {
    alert("Yes")
    var video = document.getElementById("bgvideo")
    if (video.paused)
      video.play(); 
    else 
      video.pause();
   }
