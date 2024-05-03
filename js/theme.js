const contactIconArray = document.getElementsByClassName('contact-icons');

function setDarkMode() {
    const body = document.querySelector('body');
    const themeSwitch = document.querySelector('#theme-switch');
    body.classList.remove('light');
    body.classList.add('dark');
    logo.src = 'images/icons/logo-light.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#edeff0";
    }
    if (themeSwitch.classList.contains('fa-moon')) {
        themeSwitch.classList.remove('fa-moon');
        themeSwitch.classList.add('fa-sun');
    }
    localStorage.setItem('theme', 'dark');
}

function setLightMode() {
    const body = document.querySelector('body');
    const themeSwitch = document.querySelector('#theme-switch');
    body.classList.add('light');
    body.classList.remove('dark');
    logo.src = 'images/icons/logo-dark.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#163746";
    }
    if (themeSwitch.classList.contains('fa-sun')) {
        themeSwitch.classList.remove('fa-sun');
        themeSwitch.classList.add('fa-moon');
    }
    localStorage.setItem('theme', 'light');
}

window.addEventListener('load', (e) => {
    e.preventDefault();
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    const themeSwitch = document.querySelector('#theme-switch');
    if (window.location.href.includes("index.html") || window.location.href.includes("fr-index.html")) {
        themeSwitch.addEventListener('click', () => {
            if (body.classList.contains('light')) {
                localStorage.clear();
                localStorage.setItem('theme', 'dark');
                setDarkMode();
            } else if (body.classList.contains('dark')) {
                localStorage.clear();
                localStorage.setItem('theme', 'light');
                setLightMode();
            }
        });
    }
});






