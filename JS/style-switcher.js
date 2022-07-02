// ######### Toggle Style Switcher #############
let styleSwitcherToggle = document.querySelector (".style-switcher-toggler");
styleSwitcherToggle.addEventListener("mouseenter" , () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})
//  hide style switcher on scrol 
let styleeSwitcherTogglee = document.querySelector (".style-switcher");
document.body.addEventListener("click", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open")
  }
})
// ######### Theme Colors #############
let alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if ( color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    }else {
      style.setAttribute("disabled" , "true")
    }
  })
  
}
// ######### Theme Light And Dark Mood #############
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-cloud-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-cloud-sun");
  }else{
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})