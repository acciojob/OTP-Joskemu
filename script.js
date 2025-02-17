// Get all OTP input fields
const codeInputs = document.querySelectorAll('.code');

// Function to handle forward typing and focus shift
function handleInput(event) {
  const currentInput = event.target;
  const nextInput = currentInput.nextElementSibling;
  
  // If a digit is typed, move to the next input field
  if (currentInput.value && nextInput) {
    nextInput.focus();
  }
}

// Function to handle backspace behavior
function handleBackspace(event) {
  const currentInput = event.target;
  const prevInput = currentInput.previousElementSibling;

  // If backspace is pressed and the current field is empty, move focus to the previous field
  if (event.key === 'Backspace' && !currentInput.value && prevInput) {
    prevInput.focus();
  }
}

// Add event listeners to all OTP input fields
codeInputs.forEach(input => {
  input.addEventListener('input', handleInput);  // Handle typing forward
  input.addEventListener('keydown', handleBackspace);  // Handle backspace behavior
});

// Automatically focus on the first input when the page loads
codeInputs[0].focus();
