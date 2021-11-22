# Carousel in React

**Author: Riva Davidowski**

**Goal:** The goal here is to take a feature I practiced building using Vanilla JS and
build the same feature using React. Things are different, things are getting crazy...hang in there with me.

## Tools:
 - React
 - JS
 - CSS
 - Unsplash API (for Carousel images)

**Process:**

1. Breaking down the Carousel: What is a Carousel really? What pieces does it hold? Here we go!
   - A button pointing right that sits outside the carousel container/component. When clicked on, the slide should move right (we start on left and move to right)
   - A carousel container (main container holding all elements related to carousel)
   - A carousel track container (what is a track you ask? I'm getting there :))
      - A carousel track (holds the image slides. The slides hold the image. The tutorial I followed (using vanilla JS) to help me understand how this is put together used ul --> li and each li was the slide container. Inside each li there was a img tag. I'm taking a different approach for now.
      - A carousel slide (acts as a container for each img)
      - Images (in this case, I wrapped a div around my image so I could use backgroundImage property)
    - Last but not least, a button pointing left that sits outside the carousel container or component

2. So using the above as a model, I created three components:
    1. A CarouselButtonLeft component
    2. A CarouselButtonRight component
    3. A Carousel component

3. I decided to use Unsplash API to fill my Carousel full of images
   - I used the: `GET /photos/random` endpoint
   - I limited amount of images to 6 passing query param of `count` (how many images do we REALLY need inside a carousel?)
