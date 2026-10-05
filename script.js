document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos para animar
    const elementosAnimables = document.querySelectorAll(
        '.hero-text, .hero-image-container, .info-text, .info-media, .benefit-item'
    );

    // Los ocultamos inicialmente
    elementosAnimables.forEach(el => el.classList.add('anim-fade-up'));

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Al entrar en pantalla, aplicamos la clase que los muestra
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    elementosAnimables.forEach(el => observer.observe(el));
});