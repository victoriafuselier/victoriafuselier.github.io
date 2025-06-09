const navButton = document.querySelector('#nav-button');
const navCloseButton = document.querySelector('#nav-close-button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

function openNav() {
    nav.classList.add('open');
    nav.style.display = 'flex';
    body.classList.add('nav-open');
    navButton.setAttribute('aria-expanded', 'true');

    main.classList.add('hidden');
    header.classList.add('hidden');
    footer.classList.add('hidden');
}

function closeNav() {
    nav.classList.remove('open');
    nav.style.display = 'none';
    body.classList.remove('nav-open');
    navButton.setAttribute('aria-expanded', 'false');

    main.classList.remove('hidden');
    header.classList.remove('hidden');
    footer.classList.remove('hidden');
}

navButton.addEventListener('click', () => {
    openNav();
});

navCloseButton.addEventListener('click', () => {
    closeNav();
});