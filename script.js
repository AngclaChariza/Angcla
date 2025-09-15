// Simple form validation and thank you message
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Simple form validation (ensure no fields are empty)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out to us! We will get back to you shortly.');
        contactForm.reset(); // Reset the form after submission
    } else {
        alert('Please fill out all the fields.');
    }
});
