// Typing animation
const typingText = document.querySelector('.typing-text');
const texts = ["UI/UX Designer", "Data Analyst"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  } else {
    const speed = isDeleting ? 100 : 150;
    setTimeout(type, speed);
  }
}

// Start typing animation after page loads
window.addEventListener('load', () => {
  setTimeout(type, 1000);
});

// Project card click functionality
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.card');
  
  projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      const link = this.querySelector('a');
      if (link) {
        window.location.href = link.getAttribute('href');
      }
    });
    
  
  // Pagination functionality
  const paginationLinks = document.querySelectorAll('.page-link');
  
  paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (!this.parentElement.classList.contains('disabled') {
        // In a real implementation, this would load the next page of projects
        alert(`Loading ${this.textContent} page of projects...`);
      }
    });
  });
});

// Add this to your script.js file if you want to add any interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission handling (if you add a form later)
    const contactButtons = document.querySelectorAll('.contact-info a[href^="mailto"], .contact-info a[href^="tel"]');
    
    contactButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        // You can add analytics or other tracking here
        console.log(`Contact method clicked: ${this.textContent.trim()}`);
      });
    });
  });

