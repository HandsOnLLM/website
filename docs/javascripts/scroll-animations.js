document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial-item');
  
  function checkScroll() {
    testimonials.forEach(testimonial => {
      const testimonialTop = testimonial.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (testimonialTop < windowHeight * 0.8) {
        testimonial.classList.add('fade-in');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});
