const body = document.querySelector('body');
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const logo = document.querySelector('#logo');
const navButton = document.querySelector('#nav-button');
const themeSwitch = document.querySelector('.theme-switch-container');

themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        logo.src = 'images/logo-light.png';
        navButton.style.color = '#edeff0';
        moon.style.display = 'none';
        sun.style.display = 'inline-block';
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        logo.src = 'images/logo-dark.png';
        navButton.style.color = '#163746';
        moon.style.display = 'inline-block';
        sun.style.display = 'none';
    }
});