const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const navIcon = document.querySelector('#nav-icon');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const languageButton = document.querySelector('#language-button');
const themeButton = document.querySelector('#theme-button');
const header = document.querySelector("header");

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        body.style.opacity = 0;
        header.style.top = '-6vh';
        if (footer !== null) {
            footer.style.bottom = '-6vh';
        }
        setTimeout(function() {
            main.style.display = 'none';
            themeButton.style.display = 'none';
            languageButton.style.display = 'none';
            navButton.setAttribute('aria-expanded', 'true');
            navButton.setAttribute('title', '');
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-xmark');
            navDiv.style.display ='block';
        }, 1000);
        setTimeout(function() {
            header.style.top = '6vh';
            body.style.opacity = 1;
            navDiv.style.opacity = 1;
        }, 1100);
    } else {
        body.style.opacity = 0;
        header.style.top = '-6vh';
        setTimeout(function() {   
            navIcon.classList.remove('fa-xmark');
            navIcon.classList.add('fa-bars');
            navButton.setAttribute('title', 'Menu');
            navButton.setAttribute('aria-expanded', 'false');
            navDiv.style.display = 'none';
            main.style.display = 'flex';
            if (window.location.href === 'https://victoriafuselier.github.io/' || window.location.href.includes('fr-index.html') || window.location.href.includes('index.html')) {
                themeButton.style.display = 'block';
                languageButton.style.display = 'block';
            }
        }, 1000);
        setTimeout(function() {
            body.style.opacity = 1;
            header.style.top = '6vh';
            if (footer !== null) {
                footer.style.bottom = '6vh';
            }
        }, 1100);
    }
});

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    header.style.top = '-6vh';
    if (footer !== null) {
        footer.style.bottom = '-6vh';
    }
    if (navButton.getAttribute('aria-expanded') === 'true') {
        navButton.setAttribute('aria-expanded', 'false');
        navDiv.style.opacity = 0;
        setTimeout(function() { 
            navDiv.style.display = 'none';
            body.style.display = 'block';
    }, 1000);
    }
    setTimeout(function() { 
        window.location.href = href;
    }, 1000);
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 1500);
};

document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() {
        document.querySelector('body').style.opacity = 1;
        header.style.top = '6vh';
        if (footer !== null) {
            footer.style.bottom = '6vh';
        }
        if (window.location.href.includes("about.html") || window.location.href.includes("fr-about.html") || window.location.href.includes("work.html") || window.location.href.includes("fr-work.html") || window.location.href.includes("contact.html") || window.location.href.includes("fr-contact.html")) {
            languageButton.style.display = "none";
            themeButton.style.display= "none";
        }
    }, 500);
});

