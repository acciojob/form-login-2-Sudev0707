// Get the form element
const form = document.getElementById('userForm');

// Add submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    
    // Get input values using the name attributes
    const firstName = document.querySelector('input[name="First Name"]').value;
    const lastName = document.querySelector('input[name="Last Name"]').value;
    const phoneNumber = document.querySelector('input[name="Phone Number"]').value;
    const emailId = document.querySelector('input[name="Email ID"]').value;
    
    // Create the alert message
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
    
    // Show the alert
    alert(alertMessage);
});