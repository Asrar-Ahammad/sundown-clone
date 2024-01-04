const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemC = document.querySelector("#elem-container");
var image = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", () => {
  image.style.display = "block";
});

elemC.addEventListener("mouseleave", () => {
  image.style.display = "none";
});

image.addEventListener("mouseenter", () => {
  image.style.display = "block";
});

// var elem1 = document.querySelector("#elem1");

// elem1.addEventListener("mouseenter", () => {
//   var data_image = elem1.getAttribute("data-image");
//   image.style.backgroundImage = `url(${data_image})`;
// });

// var elem2 = document.querySelector("#elem2");

// elem2.addEventListener("mouseenter", () => {
//   var data_image = elem2.getAttribute("data-image");
//   image.style.backgroundImage = `url(${data_image})`;
// });

var elems = document.querySelectorAll(".elem");

elems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    var img = e.getAttribute("data-image");
    image.style.backgroundImage = `url(${img})`;
  });
});


// Get all h2 elements inside #types
const h2Elements = document.querySelectorAll('#types h2');

// Get the div with id 'cont-img'
const contImg = document.getElementById('cont-img');

// Function to add a class to selected h2 and remove from others
function selectH2(index) {
    h2Elements.forEach((h2, i) => {
        if (i === index) {
            h2.classList.add('selected-h2');
            h2.style.setProperty('--before-color', 'orangered');
        } else {
            h2.classList.remove('selected-h2');
            h2.style.removeProperty('--before-color');
        }
    });
}

// Loop through each h2 element and add a click event listener
h2Elements.forEach((h2, index) => {
    h2.addEventListener('click', () => {
        // Change background color of ::before pseudo-element
        h2.style.setProperty('--before-color', 'orangered');

        // Change background image of cont-img based on the clicked h2
        switch (index) {
            case 0:
                contImg.style.backgroundImage = 'url("assets/images/img-1.avif")';
                break;
            case 1:
                contImg.style.backgroundImage = 'url("assets/images/img-2.avif")';
                break;
            case 2:
                contImg.style.backgroundImage = 'url("assets/images/img-3.avif")';
                break;
            default:
                // Default action or set a default image
                contImg.style.backgroundImage = 'url("assets/images/img-1.avif")';
        }

        // Apply differentiation for selected and non-selected h2
        selectH2(index);
    });
});
selectH2(0);


