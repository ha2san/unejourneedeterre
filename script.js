document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.bg-slide');
    let currentIndex = 0;
    const body = document.body;

    // Gestion du défilement des images de fond
    if (slides.length > 0) {
        console.log("Système de fond actif : " + slides.length + " images.");
        
        function changeSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        
        const slideInterval = setInterval(changeSlide, 5000);
    }

    // Gestion du scroll pour cacher le fond
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > windowHeight * 0.3) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    }

    // Écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);
    
    // Initialisation
    handleScroll();
});
