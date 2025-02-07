// Select the card element
const card = document.querySelector('.card');

// Add click event listener to toggle the card flip
card.addEventListener('click', () => {
    // Add or remove the 'flipped' class to the card
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped'); // Show the front
    } else {
        card.classList.add('flipped'); // Show the back
    }
});

// Falling Snow Animation
const snowContainer = document.querySelector('.falling-snow');

// Function to create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
    snowflake.style.opacity = Math.random(); // Random opacity for natural look
    snowContainer.appendChild(snowflake);

    // Remove the snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generate snowflakes every 300ms
setInterval(createSnowflake, 300);