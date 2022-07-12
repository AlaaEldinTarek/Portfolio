// ############# Functions #############

// remove active class 
// function removeActive(num) 
// {
//   navList[num].querySelector("a").classList.remove("active");
// }
// _________________________________________________________________

// Add active class 
// function addActive(num) 
// {
//   navList[num].querySelector("a").classList.add("active");
// }
// _________________________________________________________________

// add hover to nav 
let selNacSec = document.querySelectorAll('.nav li');
function activelink() {
  selNacSec.forEach((item) => {
    item.classList.remove('hovered');
    
  })
  this.classList.add('hovered');
  
}

// _________________________________________________________________

// Add back-section fomr all section

function addBackSction(num) {
  allSection[num].classList.add("back-section");
}
// ________________________________________________________________
// remove back-section fomr all section

function removeBackSection() {
  for (let n = 0; n < totalSection; n++) {
    allSection[n].classList.remove("back-section");
  }
}
// _________________________________________________________________

// Add Active to list nav by click on nav list
function showSection(e) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  let target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
// _________________________________________________________________

// Add Active to list nav by click on button

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    let target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  let sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSction(sectionIndex);
})
// _________________________________________________________________

// add toggle on nav to open small media 

let aside = document.querySelector(".aside");

aside.addEventListener("mouseenter", () => {
  asideSectionTogglerBtn();
})
aside.addEventListener("mouseleave", () => {
  asideSectionTogglerBtnRe();
})



function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
function asideSectionTogglerBtnRe() {
  aside.classList.remove("open");
    for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("open");
  }
}
// _________________________________________________________________



// ########### Typing Animation ###########

var typed = new Typed("#typing", {
  strings: ["", "(Front-end) Web Developer", ""],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
})
//________________________________________________________________


// ########### Aside ###########
let nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) 
{
  let a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
        
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active"))
      {
        addBackSction(j);
        
        selNacSec.forEach((item) => {
          item.addEventListener('click',activelink);
      })
      }
      navList[j].querySelector("a").classList.remove("active");
      
    }
    this.classList.add("active")
    showSection(this);
    
    if (window.innerWidth < 1200) 
    {
      asideSectionTogglerBtn();
    }
  })
}

// _________________________________________________________________
//########### side too ##############
let navv = document.querySelector(".nav-too"),
  navListt = navv.querySelectorAll("li"),
  totalNavListt = navListt.length,
  allSectionn = document.querySelectorAll(".section"),
  totalSectionn = allSectionn.length;

for (let i = 0; i < totalNavListt; i++) {
  let a = navListt[i].querySelector("a");
  a.addEventListener("click", function () {
    //   for (let n = 0; n < totalSection; n++) 
    // {
    //   allSection[n].classList.remove("back-section");
    // }
    
    removeBackSection();
    for (let j = 0; j < totalNavListt; j++) {
      if (navListt[j].querySelector("a").classList.contains("active")) {
        addBackSction(j);
        // selNacSec.querySelector("li").classList.add("hovered");
        
        selNacSecc.forEach((item) => {
          item.addEventListener('click',activelinkk);
      })
      }
      navListt[j].querySelector("a").classList.remove("active");
      
    }
    this.classList.add("active")
    showSectionnn(this);
  })
}

// _________________________________________________________________

// Add Active to list nav by click on nav list
function showSectionnn(e) {
  for (let i = 0; i < totalSectionn; i++) {
    allSectionn[i].classList.remove("active");
  }
  let target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
// _________________________________________________________________

// Add Active to list nav by click on button

function updateNavv(element) {
  for (let i = 0; i < totalNavListt; i++) {
    navListt[i].querySelector("a").classList.remove("active");
    let target = element.getAttribute("href").split("#")[1];
    if (target === navListt[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navListt[i].querySelector("a").classList.add("active");
    }
  }
}



document.querySelector(".hire-me").addEventListener("click", function () {
  let sectionIndex = this.getAttribute("data-section-index");
  showSectionnn(this);
  updateNavv(this);
  removeBackSection();
  addBackSction(sectionIndex);
})

//_________________________________________________________________
let selNacSecc = document.querySelectorAll('.nav-too li');
function activelinkk() {
  selNacSecc.forEach((item) => {
    item.classList.remove('hovered');
    
  })
  this.classList.add('hovered');
  
}