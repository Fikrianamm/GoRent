const scrollContainer = document.querySelector('.scroll-container');

// Enable horizontal scrolling with mouse wheel
scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

// Enable drag to scroll
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollContainer.style.cursor = 'grabbing';
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  scrollContainer.scrollLeft = scrollLeft - walk;
});