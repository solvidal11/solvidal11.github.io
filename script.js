// Función para cambiar de sección con animación
function mostrarSeccion(id) {
    // Ocultar todas las secciones con transición
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    setTimeout(() => {
        document.getElementById(id).classList.add('active');
    }, 50);
    
    // Actualizar la clase activa en el menú de navegación
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('nav-active');
    });
    
    // Encontrar y activar el enlace correspondiente
    document.querySelector(`nav a[onclick="mostrarSeccion('${id}')"]`).classList.add('nav-active');
    
    // Si estamos en móvil, hacer scroll al inicio del contenido
    if (window.innerWidth <= 768) {
        document.querySelector('.content').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Configuración avanzada de Vanta.js
document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 50.00,
        minWidth: 50.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc95092,
        backgroundColor: 0x16161a,
        points: 10,
        maxDistance: 23.00,
        spacing: 18.00
    });
    
    // Mostrar la sección inicial con animación
    setTimeout(() => {
        document.getElementById('inicio').classList.add('active');
    }, 300);
    
    // Marcar como activo el enlace de inicio
    document.querySelector('nav a[onclick="mostrarSeccion(\'inicio\')"]').classList.add('nav-active');
    
    // Aplicar animaciones a los elementos cuando aparecen en viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar elementos que queremos animar
    document.querySelectorAll('.habilidades-box, .educacion-box, .proyectos-box').forEach(el => {
        observer.observe(el);
    });
});

