
// MMENU
// menu
jQuery(document).ready(function ($) {
  $("#menu").mmenu({
    extensions: [
      "effect-menu-zoom",
      "effect-panels-zoom",
      "pagedim-black",
      "theme-dark",
    ],
    offCanvas: {
      position: "right",
    },
    counters: true,
    iconPanels: true,
    navbars: [
      {
        position: "top",
      },
    ],
  });
});
// menu close


// Slider 1
var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Section 1 Tab Content
function openCity1(evt, cityName) {
  // Declare all variables
  var i, tabcontent1, tablinks1;

  // Get all elements with class="tabcontent" and hide them
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active1", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active1";
}


// Section 2 Tab Content
function NewsCenter(evt, cityName) {
  // Declare all variables
  var i, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active2", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active2";
}
// Section 3 Tab Content
function MarketActivities(evt, cityName) {
  // Declare all variables
  var i, tabcontent3, tablinks3;

  // Get all elements with class="tabcontent" and hide them
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks3 = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].className = tablinks3[i].className.replace(" active3", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active3";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
document.getElementById("defaultOpen3").click();

//  Section 2 Tab Content
