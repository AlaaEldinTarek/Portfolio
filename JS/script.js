// ########### Typing Animation ###########
var typed = new Typed("#typing", {
  strings: ["", "(Front-end) Web Developer", ""],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
})
// ########### Aside ###########
let nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
  })
}
function showSection(e) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  let target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}