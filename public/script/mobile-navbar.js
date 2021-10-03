const btn = document.getElementById('mobile-menu');

function toggleMenu() {
    const nav = document.getElementById('nav-list');
    nav.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu);