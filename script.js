// Simple JavaScript for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Display an alert with the submitted information
  alert(`Thank you for contacting us, ${name}! We will reach out to you at ${email}.`);

  // Reset the form after submission
  document.getElementById("contactForm").reset();
});
