// Get the form element using its ID
const form = document.getElementById("myForm");

// Add an event listener to run this function when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();    // Stop the form from submitting and refreshing the page
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Check if either field is empty
  if (name === "" || email === "") {
    alert("Error: Both Name and Email are required.");
    return; // Stop the function if validation fails
  }

  // Check if the email includes '@'
  if (!email.includes("@")) {
    alert("Error: Email must contain '@'.");
    return; // Stop the function if email is not valid
  }

  // If everything is fine, show success message
  alert("Success! Form submitted.");

  // Print values in the browser console
  console.log("Received data: Name - " + name + ", Email - " + email);
});
