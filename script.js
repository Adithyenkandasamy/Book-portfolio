const book = document.querySelector('.book');
const coverLeft = document.querySelector('.cover-left');
const coverRight = document.querySelector('.cover-right');
const pageRight = document.querySelector('.page-right');

let isTurning = false;

coverRight.addEventListener('click', () => {
    if (!isTurning) {
        isTurning = true;
        coverRight.classList.add('turn');
        pageRight.classList.add('turn');
        setTimeout(() => {
            isTurning = false;
        }, 500); // Match this with your CSS transition duration
    }
});

// You can add hover effects here if needed
coverRight.addEventListener('mouseover', () => {
    coverRight.style.opacity = 0.8; // Example hover effect
});

coverRight.addEventListener('mouseout', () => {
    coverRight.style.opacity = 1; // Reset hover effect
});
