function liked() {
  const img = document.getElementById("like-img");
  if(img.src.match("./assets/heartBlack.svg")){
    img.src="./assets/heartBlack.svg"
  }
  else{
    img.src="./assets/heartBlack.svg"
  }
}
function playPause() {
    const video = document.getElementById("bgvideo")
    const icon = document.getElementById("videoPausedorPlay")
    const music= document.getElementById("music")
    if (video.paused){
      video.play();
      icon.style.visibility="hidden";
      music.play();
    }
    else {
      video.pause();
      icon.style.visibility="visible";
      music.pause();
    }
   }
