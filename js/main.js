let jumboImg = document.querySelector(".jumboImg");

const fakeImage = new Image();
fakeImage.src = "images/jumboImg.jpg";

fakeImage.addEventListener("load", function() {
  jumboImg.classList.remove("loading");
});

// Scroll Reveal
let slideLeft = {
  distance: "150%",
  origin: "left",
  opacity: 0,
  delay: "400",
  duration: "1500",
};
let slideRight = {
  distance: "150%",
  origin: "right",
  opacity: 0,
  delay: "400",
  duration: "1500",
};

ScrollReveal().reveal(".left", slideLeft);
ScrollReveal().reveal(".right", slideRight);

// Fish
let fish = document.querySelector(".singleFish");
let eye = document.querySelector(".eye");

function swim() {
  let main = document.querySelector("#contact .main");
  fish.classList.add("swimAngler");
  if (!main.style.opacity) {
    main.style.opacity = 1;
  }
}

fish.addEventListener("mouseover", function(event) {
  eye.classList.add("openeye");
  TweenLite.to(fish, 8, {
    onStart: swim,
    ease: Circ.ease,
    x: "100%",
    delay: 1,
    onComplete: function() {
      fish.classList.remove("swimAngler");
      fish.style.opacity = 0;
    },
  });
});

//  Thinking about active nav areas
// let url = window.location.href;
// console.log(url);
// let aTags = document.querySelectorAll("nav a");
// aTags.forEach(function() {
//   console.log(href);
//   if (url == this.href) {
//     console.log(this.href);
//   }
// });
