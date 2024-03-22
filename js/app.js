document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('hoverVideo');
  
    video.addEventListener('mouseover', function () {
      video.play();
    });
  
    video.addEventListener('mouseout', function () {
      video.pause();
      video.currentTime = 0;
    });
  });
  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})