var prev = document.getElementById("prev");
var next = document.getElementById("next");
var mysmartbasket1 = document.getElementById("mysmartbasket-row-1");
var mysmartbasket2 = document.getElementById("mysmartbasket-row-2");
var prevbestsellers = document.getElementById("prevbestsellers");
var nextbestsellers = document.getElementById("nextbestsellers");
var bestsellers1 = document.getElementById("bestsellers-row-1");
var bestsellers2 = document.getElementById("bestsellers-row-2");


next.addEventListener("click", function () {

  mysmartbasket1.style.display = "none";
  mysmartbasket2.style.display = "block";
  mysmartbasket2.style.display = "flex";

});


prev.addEventListener("click", function () {

  mysmartbasket2.style.display = "none";
  mysmartbasket1.style.display = "block";
  mysmartbasket1.style.display = "flex";

});

nextbestsellers.addEventListener("click", function () {

  bestsellers1.style.display = "none";
  bestsellers2.style.display = "block";
  bestsellers2.style.display = "flex";
});


prevbestsellers.addEventListener("click", function () {

  bestsellers2.style.display = "none";
  bestsellers1.style.display = "block";
  bestsellers1.style.display = "flex";
});

var shopdd = document.getElementById("nav2-shopdd");

var shopping = document.getElementById("shopping");
shopping.addEventListener("click", function () {

  shopdd.style.display = "block";
  shopdd.style.display = "flex";
});

var dropdown = document.getElementById("dropdown");

var showdropdown = document.getElementById("showdropdown");
dropdown.addEventListener("click", function () {

  showdropdown.style.display = "block";
});


var nav = document.getElementById("nav");
var newnav = document.getElementById("newnav");
window.onscroll = function () {

  newnav.style.display = "block";
  newnav.style.display = "flex";
}

