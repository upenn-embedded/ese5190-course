document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function updateCarousel() {
        const offset = currentIndex * -100; // Calculate the offset
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to previous image
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Go to next image
        updateCarousel();
    });

    // Optional: Auto-rotate every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000);
});