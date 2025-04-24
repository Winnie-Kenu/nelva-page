// document.addEventListener('DOMContentLoaded', () =>{
//     //Step 1: WE GET THE MAIN CONTAINER WHERE TO DISPLAY THE HERO CONTENTS
//     const heroContainer = document.getElementById ('heroSection');

//     //STEP 2: DEFINE AN ARRAY OF IMAGES...I'D DONE THE SUBTITLE AND THE TITLES IN CSS

//     const images = [
//     {
//         src : '../IMAGE/img1-forHome.png',
//     },

//     {
//         src : '../IMAGE/img1b-forHome.png', 
//     }
     
// ];

// // step 3 : Initialize a variable to keep track of the current image being shown
// let currentIndex = 0;


// //step 4: Create a function that will render the hero content on the page
// function renderHeroContent(imageData) {
// heroContainer.innerHTML= '';

// const heroContainer = document.getElementById ('heroSection');
// heroContainer.classList.add('hero-section')
// heroContainer.style.backgroundImage = `linear-gradient(to bottom,  rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${imageData.src})`;

// }

// )


//USING CHATGPT RECOMMENDATION:


// List of background images with linear gradients
const heroSection =
document.querySelector('.hero-section');

const images = [
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../IMAGE/img1-forHome.png")',
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../IMAGE/img1b-forHome.png")',
];

let currentIndex = 0;

function changeBackground() {
    //step 1: Fade out
    heroSection.style.opacity = 0
   // Change Image after fade out delay
   setTimeout (() => {
    heroSection.style.backgroundImage = images[currentIndex]; 
    currentIndex = (currentIndex + 1) % images.length; // i need more clarity on this code.

    // Step 2: Fade back in 
    heroSection.style.opacity = "1";
   }, 1000); //Matches the css transition duration (1 seconds)
}

// Change background every 7 seconds
setInterval(changeBackground, 7000);

// Show the first image immediately
changeBackground();