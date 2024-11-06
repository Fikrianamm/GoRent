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

document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect hint
  const productImage = document.querySelector('.product-image');
  if (productImage) {
      productImage.title = 'Click to view full image';
  }

  // Optional: Add keyboard support for closing modal
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          const modal = document.getElementById('imageModal');
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          if (bootstrapModal) {
              bootstrapModal.hide();
          }
      }
  });
});