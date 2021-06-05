# A multi-part React app code challenge

**1st phase: Make a web page with a 3x3 grid of boxes, and when you click on a box it turns green. Only one box can be green, though. The boxes should all be the same component.**

How do I break this down? 

  - App is the parent and can instantiate `GridOfBoxes.js`
  - `GridOfBoxes.js` will render a grid of boxes
    - GridOfBoxes needs to know how MANY boxes to render
    - GridOfBoxes needs to remember which box is selected
    - GridOfBoxes needs to know when a box is clicked on
      - The `onClick()` handler will need some parameter to know which box is clicked
  - `Box.js` will render a box
    - Box needs to know when itself is selected
    - Box needs to have behavior when it is clicked on
    - Box's click handler will to need some parameter to know which box is clicked 
    - The box needs to know which box it is
    - Box needs to change its class depending on whether it's selected