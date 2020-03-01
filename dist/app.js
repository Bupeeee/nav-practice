const navToggle = document.getElementById('nav_toggle_button');
const navDesktop = document.getElementById('nav_desktop');

navToggle.addEventListener('click', () => {
    navDesktop.classList.toggle('active')
})