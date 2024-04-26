const contactIconArray = document.getElementsByClassName('contact-icons');

function setDarkMode() {
    const body = document.querySelector('body');
    body.classList.remove('light');
    body.classList.add('dark');
    logo.src = 'images/icons/logo-light.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#edeff0";
    }
    localStorage.setItem('theme', 'dark');
}

function setLightMode() {
    const body = document.querySelector('body');
    body.classList.add('light');
    body.classList.remove('dark');
    logo.src = 'images/icons/logo-dark.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#163746";
    }
    localStorage.setItem('theme', 'light');
}

document.addEventListener('onload', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.querySelector('.theme-switch-container');
    const body = document.querySelector('body');
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
});






