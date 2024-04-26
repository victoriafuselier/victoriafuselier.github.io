const contactIconArray = document.getElementsByClassName('contact-icons');

function setLightMode() {
    const body = document.querySelector('body');
    body.classList.add('light');
    body.classList.remove('dark');
    logo.src = 'images/icons/logo-dark.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#163746";
    }
};

function setDarkMode() {
    const body = document.querySelector('body');
    body.classList.remove('light');
    body.classList.add('dark');
    logo.src = 'images/icons/logo-light.png';
    for (let i = 0; i < contactIconArray.length; i++) {
        contactIconArray[i].style.fill = "#edeff0";
    }
};

function checkTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        setLightMode();        
    } else if (theme === 'dark') {
        setDarkMode();
    }
};

document.addEventListener('onload', () => {
    checkTheme();
});

window.addEventListener("DOMContentLoaded", (event) => {
    const themeSwitch = document.querySelector('.theme-switch-container');
    const body = document.querySelector('body');
    themeSwitch.addEventListener('click', () => {
        if (body.classList.contains('light')) {
            setDarkMode();
        } else if (body.classList.contains('dark')) {
            setLightMode();
        }
    });
});




