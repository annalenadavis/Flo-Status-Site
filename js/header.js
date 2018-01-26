//STICKY HEADER CODE BELOW

//only run on main page
// const hasMainContent = element.classList.contains('mainContent');
// if(hasMainContent === true) {
// console.log("it's here!");
// }

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