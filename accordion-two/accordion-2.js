// Grab each accordion container
// For each container, add event listener
// When clicked, toggle class to active

const accordionContainers = document.getElementsByClassName('accordion-container');
const arrayOfContainers = Array.from(accordionContainers);

arrayOfContainers.forEach(container => {
  container.addEventListener('click', () => {
    container.classList.toggle('active');
  });
});

// Next define active class in stylesheet and voila!