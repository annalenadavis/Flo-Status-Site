

//**STICKY HEADER SCRIPTS**//

//debounce for Scroll-header reveal so it doesn't check too often
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  //Scroll-Header Reveal
  const scrollHeader = document.getElementById('scrollHeader');
  const mainContent = document.getElementById('mainContent');
  
  // When the user scrolls the page, execute checkHeight 
  window.addEventListener('scroll', debounce(checkHeight), 500);
  
  // Get the offset position of the navbar
  var sticky = mainContent.offsetTop - 100;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function checkHeight() {
    if (window.pageYOffset >= sticky) {
      scrollHeader.classList.add("sticky");
    } else {
      scrollHeader.classList.remove("sticky");
    }
  }
  
//**VIDEO SCRIPTS**//
const videos = document.querySelectorAll(".video");
const muteBtns = document.querySelectorAll(".muteBtn");

//Play and Pause Videos
videos.paused === true;

function playVideo(){
  this.play();
  this.previousElementSibling.style.display='none';
};
function pauseVideo(){
  this.pause();
};

function togglePlay() {
  if (this.paused === true) {
    this.play();
    this.previousElementSibling.style.display='none';
  } else {
    this.pause();
}}

//Mute and Unmute Videos
videos.muted === true;

function toggleMute(){
 if (this.previousElementSibling.muted === true){
   this.previousElementSibling.muted = false;
 } else this.previousElementSibling.muted = true; 
};

videos.forEach(video => video.addEventListener('mouseover', playVideo));
videos.forEach(video => video.addEventListener('mouseout', pauseVideo));
videos.forEach(video => video.addEventListener('click', togglePlay));
muteBtns.forEach(muteBtn => muteBtn.addEventListener('click', toggleMute));
