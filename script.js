//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');
    
    // Automatically move focus to the next input after typing
    inputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            if (e.target.value) {
                // Move focus to the next input field
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        // Handle the backspace behavior
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                // If the current input is empty and backspace is pressed, move focus to the previous input field
                inputs[index - 1].focus();
            }
        });
    });
});
