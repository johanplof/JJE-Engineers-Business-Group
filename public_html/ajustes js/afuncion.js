// Alterna visibilidad del menú principal (modo móvil)
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}

// Cierra todos los submenús abiertos
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
    });
}

// Alterna la visibilidad de un submenú
function toggleDropdown(event) {
    const parent = event.target.closest('.dropdown');
    if (!parent) return;

    event.preventDefault();

    // Cierra todos los demás dropdowns excepto este
    document.querySelectorAll('.dropdown').forEach(drop => {
        if (drop !== parent) {
            drop.classList.remove('open');
        }
    });

    // Alterna la clase 'open' para mostrar/ocultar el submenú
    parent.classList.toggle('open');
}

// Alterna redes sociales flotantes
function toggleRedes() {
    const redes = document.getElementById('menuRedes');
    if (redes) {
        redes.style.display = redes.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Listeners al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Dropdowns
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', toggleDropdown);
    });

    // Cierra los dropdowns si se hace clic fuera
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
});
