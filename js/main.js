$(document).ready(function() {

// javaScript for the Sticky header (aka scroll header) and for
//controlling the videos are in the header.js file


//Toggle the nav dropdown menu on tablets/phones with menu button
$("#menuBtn").click(function(event){
  $("#tabletNavDropdown").slideToggle();
  $(".tablet_nav_dropdown_background").slideToggle();
});

//Need code to close dropdown when a link is clicked
$("#tabletNavDropdown a").click(function(event){
  $("#tabletNavDropdown").slideToggle();
})

//Toggle nav dropdown when clicking outside menu
$(".tablet_nav_dropdown_background").click(function(){
  $("#tabletNavDropdown").slideToggle();
  $(".tablet_nav_dropdown_background").slideToggle();
});


//Scroll to Sign-up form when "Start Today" is clicked
$(".start_today").click(function(event){
  const slideTarget = $(".start_today_header");
  $("html,body").animate({
      "scrollTop" : $(slideTarget).offset().top + "px"
  });//animate method end
}); //click method end


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
