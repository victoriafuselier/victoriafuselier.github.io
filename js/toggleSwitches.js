const contactIcons = document.getElementsByClassName('contact-icons');
const headerIcons = document.getElementsByClassName('header-icons');

/* ============================================================================================================
                                                
                                            DARK MODE FUNCTION

===============================================================================================================*/

function setDarkMode() {
    const body = document.querySelector('body');
    const themeIcon = document.querySelector('#theme-icon');
    const logo = document.getElementById('logo');
    const fontButton = document.getElementById('font-button');
    const dividerLine = document.querySelector('.divider-line');
    const profileImg = document.querySelector('.profile-img');

    body.classList.remove('light');
    body.classList.add('dark');

    logo.src = '../images/icons/logo-light.png';
    fontButton.style.color = "#edeff0";

    if (dividerLine !== null) {
        dividerLine.style.backgroundColor = '#edeff0';
    }

    if (profileImg !== null) {
        profileImg.style.boxShadow = '4px 4px 10px #696969, -4px -4px 10px #696969, 4px -4px 10px #696969, -4px 4px 10px #696969';
    }

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
    const dividerLine = document.querySelector('.divider-line');
    const profileImg = document.querySelector('.profile-img');

    body.classList.add('light');
    body.classList.remove('dark');

    logo.src = '../images/icons/logo-dark.png';
    fontButton.style.color = "#163746";

    if (dividerLine !== null) {
        dividerLine.style.backgroundColor = '#163746';
    }

    if (profileImg !== null) {
        profileImg.style.boxShadow = '4px 4px 10px #163746, -4px -4px 10px #163746, 4px -4px 10px #163746, -4px 4px 10px #163746';
    }

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
                                                
                                            UNICA FONT FUNCTION

===============================================================================================================*/

function setUnicaFont() {
    const body = document.querySelector('body');
    body.classList.add('unica');
    body.classList.remove('inter');
    localStorage.setItem('font', 'unica');
}

/* ============================================================================================================
                                                
                                            INTER FONT FUNCTION

===============================================================================================================*/

function setInterFont() {
    const body = document.querySelector('body');
    body.classList.add('inter');
    body.classList.remove('unica');
    localStorage.setItem('font', 'inter');
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
    const font = localStorage.getItem('font');
    if (font === 'unica') {
        setUnicaFont();
    } else {
        setInterFont();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector('#theme-button');
    const body = document.querySelector('body');
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
    const fontButton = document.querySelector('#font-button');
    fontButton.addEventListener('click', () => {
        if (body.classList.contains('inter')) {
            // localStorage.clear();
            localStorage.setItem('font', 'unica');
            setUnicaFont();
        } else if (body.classList.contains('unica')) {
            // localStorage.clear();
            localStorage.setItem('font', 'inter');
            setInterFont();
        }
    })
});






