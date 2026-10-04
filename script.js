document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos principales de las secciones para animarlos
    const elementosAnimables = document.querySelectorAll(
        '.hero-text, .hero-image-container, .info-text, .info-media, .benefit-item, .testimonial-card'
    );

    // Les agregamos la clase inicial para que estén ocultos
    elementosAnimables.forEach(el => el.classList.add('anim-fade-up'));

    // Configuración del observador
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase que hace la transición visible
                entry.target.classList.add('show');
                // Dejamos de observar para que la animación solo ocurra una vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Empezamos a observar los elementos
    elementosAnimables.forEach(el => observer.observe(el));
});