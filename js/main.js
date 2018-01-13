$(document).ready(function() {


//Toggle the nav dropdown menu on tablets/phone
$("#menuBtn").click(function(){
  event.preventDefault();
  $("#tabletNavDropdown").slideToggle();
});


//Play Video when mouse hovers over it, pause when mouse leaves
const video=document.getElementById("video");
const toggle = document.getElementById('.toggle');

video.addEventListener('mouseover', function(){
  this.play();
});
video.addEventListener('mouseout', function(){
  this.pause();
})























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
