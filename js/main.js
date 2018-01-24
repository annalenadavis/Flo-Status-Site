$(document).ready(function() {

//debounce for Scroll-header reveal so doesn't check too often
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
// window.onscroll = function() {myFunction()};
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


//Toggle the nav dropdown menu on tablets/phones with menu button
$("#menuBtn").click(function(event){
  event.preventDefault();
  $("#tabletNavDropdown").slideToggle();
  $(".tablet_nav_dropdown_background").slideToggle();
});

//Need code to close dropdown when a link is clicked

//Toggle nav dropdown when clicking outside menu
$(".tablet_nav_dropdown_background").click(function(){
  $("#tabletNavDropdown").slideToggle();
  $(".tablet_nav_dropdown_background").slideToggle();
});


//Scroll to Sign-up form when "Start Today" is clicked
$(".start_today").click(function(event){
  event.preventDefault();
  const slideTarget = $(".start_today_header");
  $("html,body").animate({
      "scrollTop" : $(slideTarget).offset().top + "px"
  });//animate method end
}); //click method end

//Play First Video when mouse hovers over it, pause when mouse leaves
const video1=document.getElementById("video1");
video1.addEventListener('mouseover', function(){
  this.play();
});
video1.addEventListener('mouseout', function(){
  this.pause();
})
//Remove controls in desktop mode (need for tablet/phone since hover won't work)
if (screen.width >= 992) {
video1.controls = false;
}

//Play Second Video when mouse hovers over it, pause when mouse leaves
const video2=document.getElementById("video2");
video2.addEventListener('mouseover', function(){
  this.play();
});
video2.addEventListener('mouseout', function(){
  this.pause();
})
//Remove controls in desktop mode 
//(need for tablet/phone since hover won't work)
if (screen.width >= 992) {
video2.controls = false;
}


// //Slideshow on Meet Stefan page

// var slideshowCount = 0;

// $(".slideshow_slides li:eq(0)").show();
// $(".slideshow_controls li:eq(0)").addClass("active");
    
//     function slideshowIntervalCount(){
//             if (slideshowCount >= 2){
//                 slideshowCount = 0;
//             } else { 
//                 slideshowCount++;
//             }
//         changeSlide(slideshowCount);
//     } 
    
//     function changeSlide(slideNum){
//         console.log("changing slides");
//             //reset- turn all off
//         $(".slideshow_slides li").hide();
//         $(".slideshow_controls li").removeClass("active");
//             //show the correct one
//         $(".slideshow_slides li:eq("+slideNum+")").show();
//          $(".slideshow_controls li:eq("+slideNum+")").addClass("active");
//     } //changeSlide function end
    
//     $(".slideshow_controls li").click(function( ){
//         console.log ("dot dot dot!")
//         const dotIndex = $(this).index();
//         slideshowCount = dotIndex;
//         //console.log(dotIndex);
//         changeSlide(dotIndex);
//         clearInterval(interval);
//     }); //click method end
    
//      const interval = setInterval(slideshowIntervalCount, 5000); 



//Video sound or mute player_controls
// $("#video").prop('muted', true);
//
// $("#soundBtn").click(function () {
//     if ($("#video").prop('muted')) {
//         $("#video").prop('muted', false);
//         $(this).addClass('unmute-video');
//
//     } else {
//         $("#video").prop('muted', true);
//         $(this).removeClass('unmute-video');
//     }
//     console.log($("#video").prop('muted'))
// });

// const soundBtn = document.getElementById('soundBtn');
//     soundBtn.onclick = function (){
//     if (video.muted === false) {
//            video.muted = true;
//     }
//     else {
//         video.muted = false;
//     }
//     };


//Play button functions
// function togglePlay() {
//   const method = video.paused ? 'play' : 'pause';
//   video[method]();
// }

// function updateButton() {
//   const icon = this.paused ? '►' : '❚ ❚';
//   toggle.textContent = icon;
// }

// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);








}); // ready method end
