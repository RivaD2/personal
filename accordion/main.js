/*

1. Select accordion-item headers
2. In this particular case, I have several headers, all of which will need 
   to be clicked on, fire off an event. 
3. when header items are clicked on, I toggle the active class
4. I need adjacent sibling accordion item body (nextElementSibling)
  - I need to check if header has class of active
    - If so, I need to set the maxHeight to accordionItemBody using scrollHeight
    - else set the maxHeight to 0
5. There are of course other ways to toggle active class and open/close accordion
*/

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
accordionItemHeaders.forEach(header => {
  header.addEventListener('click', e => {
    header.classList.toggle('active');
    // Grab sibling of accordion body
    const accordionItemBody = header.nextElementSibling;
    // Check if header has class active
    // scrollHeight returns entire height of element in pixels including height that is
    // not viewable due to overflow
    if(header.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
