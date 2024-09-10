document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial-item');
  const bookImages = document.querySelectorAll('.book-image');
  
  function checkScroll() {
    const windowHeight = window.innerHeight;
    
    testimonials.forEach(testimonial => {
      const elementTop = testimonial.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.7) {
        testimonial.classList.add('fade-in');
      }
    });

    bookImages.forEach(image => {
      const elementTop = image.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.75) {
        image.classList.add('fade-in');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});
