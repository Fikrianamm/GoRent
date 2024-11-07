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