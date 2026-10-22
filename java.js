const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
        mainMenu.classList.toggle('is-open', !isOpen);
    });

    mainMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Mở menu');
            mainMenu.classList.remove('is-open');
        }
    });
}

document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}
