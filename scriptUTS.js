// Toogle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toogle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if (!hamburger.contains(e.targer) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});