const contactIcons = document.getElementsByClassName('contact-icons');
const headerIcons = document.getElementsByClassName('header-icons');

/* ============================================================================================================
                                                
                                            DARK MODE FUNCTION

===============================================================================================================*/

function setDarkMode() {

    const body = document.querySelector('body');
    const themeIcon = document.querySelector('#theme-icon');
    const logo = document.getElementById('logo');
    const languageButton = document.getElementById('language-button');

    body.classList.remove('light');
    body.classList.add('dark');

    logo.src = 'images/icons/logo-light.png';
    languageButton.style.color = "#edeff0";
    for (let i = 0; i < contactIcons.length; i++) {
        contactIcons[i].style.fill = "#edeff0";
    }
    for (let i = 0; i < headerIcons.length; i++) {
        headerIcons[i].style.color = "#edeff0";
    }

    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    localStorage.setItem('theme', 'dark');
}

/* ============================================================================================================
                                                
                                            LIGHT MODE FUNCTION

===============================================================================================================*/

function setLightMode() {

    const body = document.querySelector('body');
    const themeIcon = document.querySelector('#theme-icon');
    const logo = document.getElementById('logo');
    const languageButton = document.getElementById('language-button');

    body.classList.add('light');
    body.classList.remove('dark');

    logo.src = 'images/icons/logo-dark.png';
    languageButton.style.color = "#163746";
    for (let i = 0; i < contactIcons.length; i++) {
        contactIcons[i].style.fill = "#163746";
    }
    for (let i = 0; i < headerIcons.length; i++) {
        headerIcons[i].style.color = "#163746";
    }

    if (themeIcon.classList.contains('fa-sun')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    localStorage.setItem('theme', 'light');
}

/* ============================================================================================================
                                                
                                            EVENT LISTENERS

===============================================================================================================*/

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
    const themeButton = document.querySelector('#theme-button');
    themeButton.addEventListener('click', () => {
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






