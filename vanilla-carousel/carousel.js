/*
 What do I start with/what do I know?
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
     - Create a moveSlides function --> takes in track, currentSlide, targetSlide
  8. When nav indicators are clicked on, I need to move to that slide
    - use an event listener, listening for click event
  9. Create updateIndicatorDot Function (takes in currentIndicator and targetIndicator):
     - When indicator dots are clicked, move indicator dot
     - When arrows are clicked on, I need to move indicator dot
  10. Have arrow buttons dissapear if user has scrolled all the way to left or right
      - left arrow hidden from the start as user can't scroll left
      - I can use the targetIndex for indicator to help
*/
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
// Revealing all info about track, including the children of track
console.dir(track);
console.dir(slides);

const leftButton = document.querySelector('.carousel-button-left');
const rightButton = document.querySelector('.carousel-button-right');

const dotIndicatorContainer = document.querySelector('.carousel-nav');
// Used for when I need to click on dots individually
const dotIndicatorChildren = Array.from(dotIndicatorContainer.children);

// All slides should have same width
// I just need to grab one for now so I can get width
// I can get width height, dimensions using getBoundingClientRect();
const slideSize = slides[0].getBoundingClientRect();
const widthOfSlide = slideSize.width;

// Unstack slides, put them next to one another
//  What if we want more slides, I don't want
// to manually have to change this each time :)

// Create a function that sets position of the slides dynamically
const setPositionOfSlide = (slide, index) => {
  slide.style.left = widthOfSlide * index + 'px';
}

/*
For each slide and index of slide:
  - first slide gets index 0 with pixels
  - second slide will be index 1 with pixels
  - third slide index 3 etc.
*/
slides.forEach(setPositionOfSlide);

const moveSlides = (track, currentSlide, targetSlide) => {
    // Move to next slide, but I need to grab track and transform it
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // current-slide will need to be updated as I move through slides
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateIndicatorDots = (currentIndicator,targetIndicator) => {
   // Want to move the current dot indicator to move when clicked
   currentIndicator.classList.remove('current-slide');
   targetIndicator.classList.add('current-slide');
}

// const hideShowArrowButtons = (slides,leftButton,rightButton,targetIndex) => {
//   if(targetIndex === 0) {
//     // First slide, hide left arrow,show right
//     leftButton.classList.add('is-hidden');
//     rightButton.classList.remove('is-hidden');
//   } else if (targetIndex === slides.length - 1) {
//      // Last slide, show left arrow hide right
//       leftButton.classList.remove('is-hidden');
//       rightButton.classList.add('is-hidden');
//     } else {
//       // For middle indicator, show both arrows
//       leftButton.classList.remove('is-hidden');
//       rightButton.classList.remove('is-hidden');
//     }
//   }

// When left button clicked, move slides left
leftButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  // Find sibling elements as this will show the previous slide (previousElementSibling)
  const previousSlide = currentSlide.previousElementSibling;

  const currentIndicator = dotIndicatorContainer.querySelector('.current-slide');
  const previousIndicator = currentIndicator.previousElementSibling;

  // Target slide is the previousSlide
  moveSlides(track, currentSlide, previousSlide);
  updateIndicatorDots(currentIndicator, previousIndicator);
});

// When right button clicked, move slides right
rightButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  // Look for sibling elements and find next slide (nextElementSibling)
  console.dir(currentSlide);
  const nextSlide = currentSlide.nextElementSibling;

  const currentIndicator = dotIndicatorContainer.querySelector('.current-slide');
  const nextIndicator = currentIndicator.nextElementSibling;

  // Target slide will be nextSlide
  // When I click, currentSlide changes etc.
  moveSlides(track, currentSlide, nextSlide);
  updateIndicatorDots(currentIndicator, nextIndicator);
});

// When indicators clicked, move to that slide
// Track which indicator was clicked! (I don't want just e, but also target)
// If user clicks outside of indicators, nothing should happen
dotIndicatorContainer.addEventListener('click', e => {
  const targetIndicator = e.target.closest('button');
  console.log(targetIndicator)
  if (!targetIndicator) return;

  const currentSlide = track.querySelector('.currrent-slide');
  const currentIndicator = dotIndicatorContainer.querySelector('.current-slide');

  // Lets me find the target slide
  const targetIndex = dotIndicatorChildren.findIndex(dot => dot === targetIndicator);
  // If I am on slide three and click on 1st dot, I want to go to slide 1
  const targetSlide = slides[targetIndex];

  moveSlides(track, currentSlide, targetSlide);
  updateIndicatorDots(currentIndicator, targetIndicator);
  // hideShowArrowButtons(slides, leftButton, rightButton, targetIndex);
});



