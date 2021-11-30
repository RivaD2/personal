# Vanilla to React features

**Author: Riva Davidowski**

**Goal:** The goal here is to take a features I practiced building using Vanilla JS and
build the same feature using React. Things are different, things are getting crazy...hang in there with me.

## Tools Used for Carousel:
 - React
 - JS
 - CSS
 - Unsplash API (for Carousel images)

**Process for Carousel (In progress):**

1. Breaking down the Carousel: What is a Carousel really? What pieces does it hold? Here we go!
   - A button pointing left that sits outside the carousel container. When clicked on, the slide should move through previous slides shown.
   - A carousel container (main container holding all elements related to carousel)
   - A carousel track container (what is a track you ask? I'm getting there :))
      - A carousel track (to hold the image slides. The tutorial I followed using vanilla JS to help me understand how this is put together used ul --> li and each li was the slide container. Inside each li there was a img tag. I'm taking a different approach for now.)
      - Images (I grabbed 6)
    - Last but not least, a button pointing right that sits outside the carousel container on the right side. When user clicks the right button, slides move and show next image.

2. So using the above as a model, I created three components:
    1. A CarouselButton component that dynamically sets button direction
    2. A Carousel component

3. I decided to use Unsplash API to fill my Carousel full of images
   - I used the: `GET /photos/random` endpoint
   - I limited amount of images to 6 passing query param of `count` (how many images do we REALLY need inside a carousel?)
   - All images from unsplash do not include description which I need to ensure slides holding images are accessible (filtering or targeting images with a description might be needed)

4. This approach can work for now since I want to show only 6 images (but I can show any amount passed in as props) and to understand a bit more how the carousel can be built. Using other techniques and approaches such as virtualization in React, I could scale this better.

5. **Displaying a specific image**: The response I set in state in `App.js` is an array of objects (imageDataArray). I have a container div in `Carousel.js` and inside that div I have the `carousel-track` div which is wide. It slides right or left depending on which button is clicked. The goal here is to figure out how to use styling to move the track container so that it displays a specific image.
   - First step is to figure out what CSS I need to move track:
      - Used transform(X): MDN states that the, "translateX() CSS function repositions an element horizontally on the 2D plane." Using this property I can pass in the width of a given slide times the active slide index (active slide and width of slide are stored in state).
      - The carousel holds any number of images. Using `style.transform` and setting the value to be the value from the translateX(widthOfSlide * activeSlideIndex), when the button is clicked, I am saying, "Move the track horizontally based off that given value."
   - Second step is to make buttons write the CSS to move carousel-track to a specific index on click.
     - If the button is clicked left, the slide index will decrement. If clicked right, it will increment.
     - Something I had to think about here is what happens when the user has reached the end of the Carousel? I will need to set the slide index to be the start of the array of images in the carousel track. (I used a variable called nextSlideIndex to track this)
     - What happens if user is at the start of the Carousel and clicks left? In that case, I need to show them the end of the carousel.
   - Third step is to hook up the individual buttons to increase or decrease the index (button right increases, button left decreases)
     - In this case, I used a ternary to use the `direction` dynamically. If the direction is left, then decrement. If direction is not left ( but right) increment.

**Process for Accordion :**

What is an accordion? I am paraphrasing [sliderevolution.com](sliderevolution.com) when I say that accordions are really a set of horizontally or vertically stacked headings that display collapsible items/panels. Each panel contains a section of content.

We use them when we want to feature several sections of content at a time which helps to reduce the amount of scrolling the user has to do.

The accordion header and panel are the two parts that are fundamental to the accordion. The header provides interactivity, allowing us to reveal or hide given pieces of content in the panel. The panel itself is collapsible.

Before building this in React, I tried two different ways (with guidance from tutorials), which as it turns out are the two typical approaches using HTML, CSS and JS:
- The first is to use hidden form elements
- The second makes use of CSS pseudo selectors

Breaking down the steps:

- First I created a JSON file to hold my headings and content for the accordion (the content is shown inside the panel)
- I Imported the JSON data into `App` and passed the accordion data in its entirety as props to the `Accordion` component.
- I set up the basic structure for the Accordion and took in the props passed from `App`. I mapped over the JSON data, displaying each accordion header and content accordingly.
  - This structure works for now, but I might want to consider mapping over the data in App.js instead. Then I could pass props for the `header` and `content` from the JSON data to the Accordion component.
- When thinking of how I want to open and close the accordion panel, I know that by default it is open. Since I am using React to build this feature, I will make use of state to determine whether the panel is open or closed setting the initial value to be a boolean. This state will live inside the `Accordion` component.
- I also know I will need some sort of click handler on the icon in the accordion title since that is where my icon to open the panel lives. When clicked on, it should do the following:
   - When the user clicks on the icon in the accordion title, I want to open the panel.
   - I also want to dynamically change the icon depending on whether the state is set to true or false.
   - `+` to open panel and reveal content, perhaps state of `isOpen` set to false
   - `-` to close the panel, `isOpen` set to true (- will show only when panel is open)
