document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.bg-slide');
    let currentIndex = 0;

    if (slides.length > 0) {
        console.log("Système de fond actif : " + slides.length + " images.");
        
        function changeSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        
        setInterval(changeSlide, 5000);
    }
});
