// Your code goes here
function addEventToList(list, event, fn) {
  for (let q = 0; q < list.length; q++) {
    list[q].addEventListener(event, fn);
  }
}
let trollBtn = document.querySelectorAll(".btn");
addEventToList(trollBtn, "mouseenter", function() {
  this.style.visibility = "hidden";
});
let trollHead = document.querySelector(".logo-heading");
window.addEventListener("scroll", () => {
  trollHead.textContent = "Troll Bus";
});
let trollAnchor = document.querySelectorAll(".nav-link");
addEventToList(trollAnchor, "click", function(event) {
  this.style.fontSize = "3px";
  event.preventDefault();
  event.stopPropagation();
});
let trollBus = document.querySelector(".intro img");
trollBus.addEventListener("dragstart", function() {
  this.setAttribute(
    "src",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117"
  );
});
let trollPar = document.querySelectorAll("p");
addEventToList(trollPar, "contextmenu", function() {
  this.textContent = "No no";
  this.style.color = "crimson";
});
let trollH2 = document.querySelectorAll("h2");
addEventToList(trollH2, "copy", function() {
  this.textContent = "That's plagiarism!";
  this.style.color = "red";
});
let siteIntro = document.querySelector(".intro");
let trollMsg = document.createElement("h6");
trollMsg.textContent = "Double Click Me For A Secret";
window.addEventListener("resize", function() {
  siteIntro.prepend(trollMsg);
});
trollMsg.addEventListener("dblclick", function() {
  this.textContent = "Drag the fun bus to drive it!";
});
let trollNav = document.querySelector(".nav-container");
trollNav.addEventListener("click", function() {
  this.style.background = "#A71930";
});
let siteContSect = document.querySelector(".content-section");
let trollImgs = document.querySelector(".content-section img");
trollImgs.addEventListener("dragend", function() {
  siteContSect.style.display = "none";
});
let siteContainer = document.querySelector(".home");
window.addEventListener("mouseup", function() {
  siteContainer.classList.toggle("trollClass");
});
