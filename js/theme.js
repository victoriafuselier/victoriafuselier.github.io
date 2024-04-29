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

// window.onload = function() {
//     setTimeout(loadPage, 2000);
//     const theme = localStorage.getItem('theme');
//     if (theme === 'dark') {
//         setDarkMode();
//     } else {
//         setLightMode();
//     }
// };

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
        themeSwitchContainer.addEventListener('click', () => {
            if (body.classList.contains('light')) {
                localStorage.clear();
                localStorage.setItem('theme', 'dark');
                setDarkMode();
                if (themeSwitch.classList.contains('fa-moon')) {
                    themeSwitch.classList.remove('fa-moon');
                }
                themeSwitch.classList.add('fa-sun');
            } else if (body.classList.contains('dark')) {
                localStorage.clear();
                localStorage.setItem('theme', 'light');
                setLightMode();
                if (themeSwitch.classList.contains('fa-sun')) {
                    themeSwitch.classList.remove('fa-sun');
                }
                themeSwitch.classList.add('fa-moon');
            }
        });
    }
});






