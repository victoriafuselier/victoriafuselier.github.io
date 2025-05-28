const navButton = document.querySelector('#nav-button');
const nav = document.querySelector('nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const fontButton = document.querySelector('#font-button');
const themeButton = document.querySelector('#theme-button');
const header = document.querySelector('header');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const compassIcon = document.querySelector('#compass-icon');

function restorePageState() {
    const isOpened = navButton.getAttribute('aria-expanded') === 'true';
    if (isOpened) {
        // remove current nav icons
        hamburgerIcon.classList.remove('fa-bars');
        compassIcon.classList.remove('fa-compass');
        // add nav close icon
        hamburgerIcon.classList.add('fa-xmark');
        compassIcon.classList.add('fa-xmark');
        // adjust nav button attribute
        navButton.setAttribute('title', 'Close');
        // show nav
        nav.style.display = 'block';
        // fade nav in
        nav.style.opacity = 1;
    } else {
        // remove close icon
        hamburgerIcon.classList.remove('fa-xmark');
        compassIcon.classList.remove('fa-xmark');
        // restore nav icon
        compassIcon.classList.add('fa-compass');
        hamburgerIcon.classList.add('fa-bars');
        // adjust nav button attribute
        navButton.setAttribute('title', 'Menu');
        // hide nav
        nav.style.display = 'none';
    }
    // fade body back in
    body.style.opacity = 1;
}

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        restorePageState();
    }
});

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded') === 'true';
    // fade body out
    body.style.opacity = 0;
    // after 1s, 
    setTimeout(() => {
        // if nav wasn't open,
        if (!isOpened) {
            // hide original elements except logo
            main.style.display = 'none';
            footer.style.display = 'none';
            themeButton.style.display = 'none';
            fontButton.style.display = 'none';
            // adjust nav button attributes
            navButton.setAttribute('aria-expanded', 'true');
            navButton.setAttribute('title', '');
            // remove the current nav icon from button
            hamburgerIcon.classList.remove('fa-bars');
            compassIcon.classList.remove('fa-compass');
            // add close icon to button
            hamburgerIcon.classList.add('fa-xmark');
            compassIcon.classList.add('fa-xmark'); 
            // and show nav list
            nav.style.display = 'block';
        // or if nav was open,
        } else {
            // adjust nav button attributes
            navButton.setAttribute('aria-expanded', 'false');
            navButton.setAttribute('title', 'Menu');
            // hide nav list
            nav.style.display = 'none';
            // show original elements
            main.style.display = 'flex';
            footer.style.display = 'flex';
            themeButton.style.display = 'block';
            fontButton.style.display = 'block'; 
            // remove close icon
            hamburgerIcon.classList.remove('fa-xmark');
            compassIcon.classList.remove('fa-xmark');
            // and add nav icons
            compassIcon.classList.add('fa-compass');
            hamburgerIcon.classList.add('fa-bars');
        }
    }, 1000);

    // After 1.1 s, fade body back in
    setTimeout(() => {
        body.style.opacity = 1;
        // if nav is open mow,
        if (!isOpened) {
            // fade it back in
            nav.style.opacity = 1;
        }
    }, 1100);
});

// When DOM content is loaded
document.addEventListener('DOMContentLoaded', function(event) {
    // wait .5s, then
    setTimeout(function() {
        // fade the body in
        document.querySelector('body').style.opacity = 1;
        // restore page state
        restorePageState(); 
    }, 500);
});