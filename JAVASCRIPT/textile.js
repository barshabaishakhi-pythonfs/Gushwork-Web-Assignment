document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic UI feedback for the user
  const btn = document.querySelector('.submit-btn');
  const feedback = document.getElementById('formFeedback');
  
  btn.textContent = "Sending...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    this.classList.add('hidden');
    feedback.classList.remove('hidden');
  }, 1000);
});