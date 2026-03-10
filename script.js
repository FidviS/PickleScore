// Set the greeting once the page loads
document.getElementById('main-greeting').innerText = "Hello World!";

// Add a little interaction
const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});
