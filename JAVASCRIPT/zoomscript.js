// Simple Zoom Logic for Carousel Images
const carouselImages = document.querySelectorAll('.hero-image img');

carouselImages.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)";
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center";
    });
});