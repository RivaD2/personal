# Vanilla to React features

**Author: Riva Davidowski**

**Goal:** The goal here is to take a features I practiced building using Vanilla JS and
build the same features using React. Things are different, things are getting crazy...hang in there with me.

## Tools Used:
 - React
 - JS
 - CSS
 - Unsplash API (for Carousel images)

### Process for Carousel:

1. Breaking down the Carousel: What is a Carousel really? What pieces does it hold? Here we go!
   - A button pointing left that sits outside the carousel container. When clicked on, the slide should move through previous slides shown.
   - A carousel container (main container holding all elements related to carousel)
   - A carousel track container (what is a track you ask? I'm getting there :))
      - A carousel track (to hold the image slides. The tutorial I followed using vanilla JS to help me understand how this is put together used ul --> li and each li was the slide container. Inside each li there was a img tag. I'm taking a different approach for now.)
      - Images (I grabbed 6)
    - Last but not least, a button pointing right that sits outside the carousel container on the right side. When user clicks the right button, slides move and show next image.

2. So using the above as a model, I created two components:
    1. A CarouselButton component that dynamically sets button direction
    2. A Carousel component

3. I decided to use Unsplash API to fill my Carousel full of images
   - I used the: `GET /photos/random` endpoint
   - I limited amount of images to 6 passing query param of `count` (how many images do we REALLY need inside a carousel?)
   - All images from unsplash do not include description which I need to ensure slides holding images are accessible (filtering or targeting images with a description might be needed)

**Displaying a specific image**: The response I set in state in `App.js` is an array of objects (imageDataArray). I have a container div in `Carousel.js` and inside that div I have the `carousel-track` div which is wide. It slides right or left depending on which button is clicked. The goal here is to figure out how to use styling to move the track container so that it displays a specific image.

- First step is to figure out what CSS I need to move track:
  - Used transform(X): MDN states that the, "translateX() CSS function repositions an element horizontally on the 2D plane." Using this property I can pass in the width of a given slide times the active slide index (active slide and width of slide are stored in state).
  - The carousel holds any number of images. Using `style.transform` and setting the value to be the value from the `translateX(widthOfSlide * activeSlideIndex)`, when the button is clicked, I am saying, "Move the track horizontally based off that given value."
- Second step is to make buttons write the CSS to move carousel-track to a specific index on click.
  - If the button is clicked left, the slide index will decrement. If clicked right, it will increment.
  - Something I had to think about here is what happens when the user has reached the end of the Carousel? I will need to set the slide index to be the start of the array of images in the carousel track. (I used a variable called `nextSlideIndex` to track this)
  - What happens if user is at the start of the Carousel and clicks left? In that case, I need to show them the end of the carousel.
- Third step is to hook up the individual buttons to increase or decrease the index (button right increases, button left decreases)
  - In this case, I used a ternary to use the `direction` dynamically. If the direction is left, then decrement. If direction is right increment.

**Roadblocks I hit:**

- I have six images and if I clicked on the right button to increment, I would reach the end of the slides at the 6th image. If I clicked on the left button, I should've seen the last image in the Carousel. This worked fine and dandy if I was incrementing. However, when I started on the first image for the second run through, clicking the left button to decrement, the last image in the Carousel was **NOT** the same! The image at that index is no longer the same image that was there prior, the order was off.
  - Solution/Fix: Added in `useEffect` hook, called `setSlidePosition()` and added `activeSlideIndex` as dependency. Before I was calling it in the click handler after calling `setActiveSlideIndex` with the new index. At some point in time React will update the index (state), but not immediately. This was causing the above symptoms because I was not taking into account the `setActiveSlideIndex` is asynchronous.

- Another obstacle I faced was when I first attempted to click on the arrow right button.Upon first click of the button, nothing happened. On the second click, success! I was able to cycle through images. Why would I not be able to move the track on first click?
  - Solution/Fix: This fix was the same as above. This was a symptom of the same problem. The displayed slide was always off by one because `activeSlideIndex` is not immediately updated.

**Scalability:** This approach can work for now since I want to show only 6 images (but I can show any amount passed in as props) and to understand a bit more how the carousel can be built. Using other techniques and approaches such as virtualization in React, I could scale this better.

### Process for Accordion:

What is an accordion? I am paraphrasing [sliderevolution.com](sliderevolution.com) when I say that accordions are really a set of horizontally or vertically stacked headings that display collapsible items/panels. Each panel contains a section of content.

We use them when we want to feature several sections of content at a time which helps to reduce the amount of scrolling the user has to do.

The accordion header and panel are the two parts that are fundamental to the accordion. The header provides interactivity, allowing us to reveal or hide given pieces of content in the panel. The panel itself is collapsible.

Before building this in React, I tried two different ways (with guidance from tutorials), which as it turns out are the two typical approaches using HTML, CSS and JS:

- The first is to use hidden form elements
- The second makes use of CSS pseudo selectors

**Breaking down the steps:**

- First I created a JSON file to hold my headings and content for the accordion (the content is shown inside the panel)
- I Imported the JSON data into `App` and passed the accordion data in its entirety as props to the `Accordion` component.
- I set up the basic structure for the Accordion and took in the props passed from `App`. I mapped over the JSON data, tracking the index for each item, and displayed each accordion header and content accordingly.
  - This structure works for now, but I might want to consider mapping over the data in App.js instead. Then I could pass props for the `header` and `content` from the JSON data to the Accordion component.
- When thinking of how I want to open and close the accordion panel, I know that by default it is closed. Since I am using React to build this feature, I will make use of state (`openPanelIndex`)to determine which panel is open setting the initial value to be a -1. -1 is never going to be index in the array of data. This state will live inside the `Accordion` component.
- I also know I will need some sort of click handler on the accordion title since that is where my icon to open the panel lives. When clicked on, it should do the following:
   - update the state to be whatever index (panel) has been clicked on
   - If a panel is open, then I need to set the state value to be -1 again (close it), otherwise I will set the state to be the index of the panel that is clicked on.
- When the icon is clicked, If `openPanelIndex` is equal to the current index I am on,
   then that means the accordion is open (that particular panel is open).
- I also want to dynamically change the icon depending on the state.
   - `+` to open panel and reveal content
   - `-` to close the panel
   - I can use a ternary to change the icons, `openPanelIndex === index ?` then panel is open, so show the `'-' : '+'`

### Process for Analog Clock:

1. Breaking down the clock: What pieces/components make up a clock? Let's get to it!
   - When we look at a clock, we have the overall clock container. Ya know, the circular container that holds all the bits.
   - Inside the clock container, sits the clock face.
   - The clock face is what displays hours, minutes and seconds and the clock hands
   - Am I displaying time zones or just the clock/the time? That is something to think about. For this I will display just the time (displaying time zones can come later)
2. I know I can create two components, a `Clock` component which includes several pieces:
   - A container div aka the `clock`.
   - The container or the 'clock' div will hold a child div, the `clock-face`.
   - The clock-face will instantiate the `Hand` component (3 of them, one for each hand)
  A `Hand` component will include a div that holds one child div:
     - This div will set handDegrees and style dynamically
3. What CSS can I use to make my clock well, look like a clock?
   - My analog clock container will be circular which means I for sure need to use the border as well as border radius properties to make it circular. I will also need to set a width and height.
   - The next thought here is how can I position the clock face as well as the hands?
     - I can use absolute and relative positioning. In this case, because I want the hands to sit relative to the clock face container and clock container, I can set all hand positions to absolute (this means the clock face container and clock container, which are parents of the hands, will have positions set to relative.) For this to work appropriately I HAVE to set a position on the parent of the hands
     - I know how to get the hands inside the clock face container now, but how can I make them sit or span from the center of the clock? In other words, I need to vertically position them so that they stem from the center. I can use `top` property for vertical positioning here. The hands will sit halfway down from the top of the clock face container. I may also use other properties like transform to account for height of the clock hands (as I learned in wes bos clock tutorial)
     - Now that I somewhat know how to position the hands, how can I make them rotate?
       - Once again, the transform property will come into play here:
       - `transform-origin`: sets the point around which a transformation is applied. In this case, I know I need the hands to rotate right from the right-hand side.I will also use `transform: rotate()` to rotate all hands 90 degrees, starting the hand at 12 o'clock (pointing up and down vs left to right which is what a div does...it's a block element)
       - `transform:rotate()` is a CSS function that will rotate an element around a fixed point on a 2D plane. The clock hands are rotating at 90 degrees, so I can pass that in to this function.
       - Clock hands move at a certain speed as well so I can make use of a timing function, namely the `cubic-bezier` function in CSS.
       - To use the cubic-bezier timing function, I need to make use of the[transition-timing-property](https://www.the-art-of-web.com/css/timing-function/) to speed up or slow down the ticks of the hands.
       - After spending time reading about the mathmatics behind the bezier-curve (which I do not understand 100% and have no shame in saying so) as well as the transition timing property, I know that this property can be used for SO MUCH and that the bezier curve is really behind all values set for this timing function. Really the function describes an acceleration pattern (using four points, hence 'cubic'). I can manipulate this curve by changing the four args that are passed into the function. This can be used to give the hand a sort of bounce as it ticks.
4. What functions might I need in the component?
   - When I built this clock using vanilla JS, I created one function that was responsible for generating the seconds, minutes and hours using the `Date` object in JS. I also used `transform` style property within the function, using `rotate()` to rotate the hands by a certain amount of degrees.
   - I will still need the following:
     - A function that creates the time (calculates seconds, minutes and hours etc.) I can still use the `Date` object for this since it contains methods that will make this quite easy (`getSeconds(), getMinutes(), and getHours()`).
       - I can either create a new function for setting degrees of the second, hour and minute hands since it is not enough to merely get the seconds, hours and minutes, since I have to change the degree of where the hands sit. Another option is that I just do these operations inside the function that calculates seconds, minutes and hours.
     -  Additional thoughts: In my vanilla JS function, I called the Date constructor using `new Date()`, initializing a new Date object (to help calculate the time) and then passed that function to `setInterval` along with the milliseconds that I want the code to execute in (passed in 1000 for every second).
     -  Since I am building the clock in React, I can use the `useEffect` hook and make use of `setInterval()` or `setTimeout()` inside since I need the function to run every second. I may need to think about using a cleanup function here. I did this once in another tutorial for React and remember that we can do this when we need to prevent memory leaks/unwanted behavior.
5. What does the component need to remember? What is stored in state? What props will the components take?
   - For the `Clock` component, I decided to store time in state with an initial value set to an empty object (there are other ways to approach this of course). I know I will need to update the state to be the seconds, minutes, and hours that are calculated.
   - For the `Hand` component I need to think about what props I need. I can choose which component calculates the time and degrees. Here are options:
   - Option 1: Clock calculates everything and passes degrees and time to hand. Hand then rotates itself.
   - Option 2: Clock calculates numeric values of time for each hand and passes them to the Hand. The Hand calculates degrees from that value and rotates itself.
   - Option 3: The Hand calculates the time and degrees and also rotates itself.
   - Option 4: Have NO Hand component and just do everything in Clock component.
6. Ok, quick recap. What is the Clock component responsible for?
   - setting up a timer
   - generating time (seconds, minutes, and hours)
   - updating UI
7. Who will consume the Clock component? For now, `App` will show the `Clock`.
8. I chose Option 2:
    - Since I chose option 2 from above, I had to think about the following:
      - How could I teach the `Hand` component how to be a second hand, a minute hand, or an hour hand?
      - How will the `Clock` component tell each of the three `Hand` components which type of hand it is? I decided to initialize a variable named `clockDetails` and set the value to be an object that holds key value pairs of `hand` and `time`. The `hand` is of type `string` and the `time` is of type number (the seconds, minutes, or hours from state).
     - From there, I can pass `time` and `hand` as a prop and set the value accordingly using the `clockDetails` object.
     - The `Hand` component takes in the props of time and hands. The `Hand` component then has to be responsible for calculating the degrees for the seconds, minutes and hours. I know the following:
        - The degrees for seconds and minutes will be the same since there are 60 minutes in an hour and 60 seconds to 1 min. However, the hour degree calculation will be different, because there are 12 hours on the clock.
    - The `Hand` component also has to set the degrees accordingly based off which hand it is. So if `hand` is === 'hourHand` then I show the degrees for the hourHand etc.
    - Because each hand needs to take on different styles, I used the `hand` prop to determine which type of hand I was dealing with and passed it in as a `className`. I added in the additional classes in my stylesheet so I could change styles accordingly

**Improvements that could be made:**
After reading more on `setInterval`and Dan Abramov's `useInterval` Hook, it seems a possible improvement I could make or experiment with is updating the code for setting the interval and the cleanup function. Why would I do this?

Well, according to the article (and others out there on using `setInterval` in React) there are some pitfalls to using the setInterval() API with Hooks, primarily that, "...setInterval does not describe a process in time — once you set the interval, you can’t change anything about it except clearing it" and that there is a mismatch between the React model and the setInterval API.

For smaller scale projects it seems `setInterval` works fine, but understanding more about how it works with React and going a bit deeper into this subject seems like a good idea.

Read Dan Abramov's article here:
[Make setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)