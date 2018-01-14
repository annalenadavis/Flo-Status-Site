$(document).ready(function() {


//Toggle the nav dropdown menu on tablets/phone
$("#menuBtn").click(function(){
  event.preventDefault();
  $("#tabletNavDropdown").slideToggle();
});


//Play Video when mouse hovers over it, pause when mouse leaves
const video2=document.getElementById("video2");

video2.addEventListener('mouseover', function(){
  this.play();
});
video2.addEventListener('mouseout', function(){
  this.pause();
})

//Remove controls in desktop mode (need for tablet/phone since hover won't work)
if (screen.width >= 992) {
video2.controls = false;
}

//Play Video when mouse hovers over it, pause when mouse leaves
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
