const navToggle = document.getElementById('nav_toggle_button');
const navDesktop = document.getElementById('nav_desktop');

const navLink = document.getElementsByClassName('nav_link');

navToggle.addEventListener('click', () => {
    navDesktop.classList.toggle('active')
})

Array.from(navLink).forEach(function(navlink){
    navlink.addEventListener('click', (e) => {
        e.preventDefault();

    })
})