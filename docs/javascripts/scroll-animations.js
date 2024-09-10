document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial-item');
  const bookImages = document.querySelectorAll('.book-image');
  const authorImages = document.querySelectorAll('.author-image');
  const tocImages = document.querySelectorAll('.toc-image'); // Assuming you have a class for TOC images
  
  function checkScroll() {
    const windowHeight = window.innerHeight;
    
    function fadeInElement(element) {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('fade-in');
      }
    }
    
    testimonials.forEach(fadeInElement);
    bookImages.forEach(fadeInElement);
    authorImages.forEach(fadeInElement);
    tocImages.forEach(fadeInElement);
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});
