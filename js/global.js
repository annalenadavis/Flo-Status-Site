$(document).ready(function() {

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



}); // ready method end


// // Scroll to sign-up form 
// const startToday = document.querySelectorAll(".start_today");
// const slideTarget = document.getElementById("start_today_header");

// console.dir(slideTarget);

// function scrollToTarget(e){
//   e.preventDefault;
//   slideTarget.scrollIntoView(true);
//   // window.scroll({ 
//   //   top: startToday,
//   //   behavior: "smooth"
//   // });
// }

// // startToday.addEventListener("click", scrollToTarget);
// const startTodayBtns = Array.from(document.querySelectorAll('.start_today'));
// startTodayBtns.forEach(btn => btn.addEventListener('click', scrollToTarget));