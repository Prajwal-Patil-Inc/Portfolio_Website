/* typing animation */
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Full Stack Developer",
    "Cloud Engineer",
    "Ansible Developer"
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* aside */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function removeBackSection() {
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

//////

// Get the modal

var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}



for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }

    // OLD CODE
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//XXXXXXXXXXXXXXXXXXXXXXX    Modified old code    XXXXXXXXXXXXXXXXXXXXXXXXXX

// Get the modal

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = modal.getElementsByClassName("close")[0]; // Modified by dsones uk

// When the user clicks on the button, open the modal

btn.onclick = function() {

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


//Toast

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
