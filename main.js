Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.0721966205837172 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.6, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.31, range: [0, 2] },
    noise_scale: { value: 25.62, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});


let images = ["./images/dbzgifff.gif", "./images/opgifff.gif", "./images/narutogifff.gif", "./images/hxhgiffff.gif", "./images/bcgifff.gif"]

let botimg = ["./images/DbzLogo.webp", "./images/oplogo.webp", "./images/narutologo.webp", "./images/Hunter-x-Hunter-Logo.webp", "./images/bclogo.webp"]

let dialogues = [`Goku: "Alright, let's settle this like Saiyans!"`, `Luffy: "Meat, adventure, nakama - that's all I need for the Pirate King's life!"`, `Naruto: "Believe it! Dattebayo!"`, `Gon: "I'll never give up until I find Ging!"`, `Asta: "No matter how much bigger they are, I'll never back down!"`]

let idx = 0;
let botidx = 0;
let dialogueidx = 0;

document.querySelector("#main").addEventListener("click", function() {
  // Move to the next image, wrapping around to the beginning if needed
  idx = (idx + 1) % images.length;
  botidx = (botidx + 1) % botimg.length;
  dialogueidx = (dialogueidx + 1) % dialogues.length;
  // Update the image in the div
  document.querySelector("#heroright #imagediv img").style.transition = "all ease 0.3s"
  document.querySelector("#imagediv").innerHTML = `<img src="${images[idx]}">`;
  document.querySelector("#bottomimg").innerHTML = `<img src="${botimg[botidx]}">`
  document.querySelector("#uppara").innerHTML = `<p>${dialogues[dialogueidx]}</p>`
});






