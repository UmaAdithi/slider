const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.nav-dot');

let index = 0;

function updateDots() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx;
        slides.style.animation = 'none';
        slides.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => (slides.style.animation = 'slideAnimation 12s infinite'), 0);
        updateDots();
    });
});

updateDots();
