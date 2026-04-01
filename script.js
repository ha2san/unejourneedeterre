document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.bg-slide');
    let currentIndex = 0;
    const body = document.body;

    // Gestion du défilement des images de fond
    if (slides.length > 0) {
        function changeSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        setInterval(changeSlide, 5000);
    }

    // =====================================================
    // NAV ADAPTIVE : blanc sur hero, noir sur section texte
    // =====================================================
    const nav = document.querySelector('.top-nav');
    const letterSection = document.querySelector('.letter-section');

    function updateNav() {
        if (!nav || !letterSection) return;
        const navHeight = nav.offsetHeight;
        const sectionTop = letterSection.getBoundingClientRect().top;

        // Si le haut de la section texte est à portée de la nav → passe en noir
        if (sectionTop <= navHeight) {
            nav.classList.add('nav-dark');
        } else {
            nav.classList.remove('nav-dark');
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // état initial

    // Gestion du scroll pour body (existant)
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight * 0.3) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
