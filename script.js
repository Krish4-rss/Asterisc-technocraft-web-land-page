document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('webinar-registration-form');
  const confirmationSection = document.getElementById('confirmation');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can add code here to handle form submission, registration, and sending confirmation emails.
    
    // Show confirmation section
    registrationForm.style.display = 'none';
    confirmationSection.style.display = 'block';
  });
});
