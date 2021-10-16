// Break down steps into pieces:

/*
 What do I start with/what do I know?
 - I will have to create variables for all elements I need
 - When I click on nav indicators, I  need to move that slide etc.

  1. Start with grabbing the track
  2. Then grab the slides ( I can grab these individually or use array)
  3. Create variables for each button (left and right buttons)
  4. Grab indicators (dots at bottom) ( I may need to target individual ones at some point)
  5. Size of the slide container is important, if screen is smaller it will shrink, larger, it expands etc.
     - I need to create a variable for slide size, grab size from children array

  6. Slides are stacked, so I need to get them unstacked and be next to one another
    - I can do this with CSS but here we are using
    - I first need to grab width of one slide
    - Then I can create a function to set positions of each slide
  7. - When I click left, I need to move slides left
     - When I click right, I need to move slides right
*/
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
// Revealing all info about track, including the children of track
console.dir(track);
console.dir(slides);

const leftButton = document.querySelector('.carousel-button-left');
const rightButton = document.querySelector('.carousel-button-right');

const navDotContainer = document.querySelector('.carousel-nav');
// Used for when I need to click on dots individually
const navDotChildren = Array.from(navDotContainer.children);

// All slides should have same width
// I just need to grab one for now so I can get width
// I can get width height, dimensions using getBoundingClientRect();
const slideSize = slides[0].getBoundingClientRect();
console.log(slideSize);
const widthOfSlide = slideSize.width;

// Unstack slides, put them next to one another
//  What if we want more slides, I don't want
// to manually have to change this each time :)


/* Create a function that sets position of the slides dynamically
  Then use a ForEach:
  For each slide and index of slide:
    - first slide gets index 0 with pixels
    - second slide will be index 1 with pixels
    - third slide index 3 etc.
*/
const setPositionOfSlide = (slide, index) => {
  slide.style.left = widthOfSlide * index + 'px';
}
slides.forEach(setPositionOfSlide);

// Move slides left when user clicks left
leftButton.click('click', e => {

});

// Move slides right when user clicks right
// Find current slide
// Find next slide
rightButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  // Look for sibling elements and find next slide (nextElementsSibling)
  console.dir(currentSlide);
  const nextSlide = currentSlide.nextElementSibling;
  // I need to know how much to move to next slide
  const amountToMove = nextSlide.style.left;
  // move to next slide, but I need to grab track and transform it
  track.style.transform = 'translateX(-' + amountToMove + ')';
});






