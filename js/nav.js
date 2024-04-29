const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const languageSwitchContainer = document.querySelector('#language-switch-container');
const themeSwitchContainer = document.querySelector('#theme-switch-container');
const languageSwitch = document.querySelector('#language-switch');
const themeSwitch = document.querySelector('#theme-switch');
const navButtonContainer = document.querySelector('#nav-button-container');
const header = document.querySelector("header");
const logo = document.querySelector('#logo');

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        main.style.opacity = 0;
        navButton.style.opacity = 0;
        logo.style.opacity = 0;
        if (document.querySelector('footer') !== null) {
            footer.style.bottom = '-6vh';
            footer.style.opacity = 0;
        }
        if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
            languageSwitch.style.opacity = 0;
            themeSwitch.style.opacity = 0;
        }
        setTimeout(function() {
            main.style.display = 'none';
            themeSwitch.style.display = 'none';
            languageSwitch.style.display = 'none';
            navButton.setAttribute('aria-expanded', 'true');
            navButton.classList.remove('fa-bars');
            navButton.classList.add('fa-xmark');
            navDiv.style.display ='block';
        }, 1000)
        setTimeout(function() {
            navDiv.style.opacity = 1;
            navButton.style.opacity = 1;
            logo.style.opacity = 1;
        }, 1100)
    } else {
        navDiv.style.opacity = 0;
        navButton.style.opacity = 0;
        logo.style.opacity = 0;
        setTimeout(function() {   
            navButton.classList.remove('fa-xmark');
            navButton.classList.add('fa-bars');
            navButton.setAttribute('aria-expanded', 'false');
            navDiv.style.display = 'none';
            main.style.display = 'flex';
            // if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
                themeSwitch.style.display = 'block';
                languageSwitch.style.display = 'block';
            // }
        }, 1000)
        setTimeout(function() {
            main.style.opacity = 1;
            navButton.style.opacity = 1;
            logo.style.opacity = 1;
            if (document.querySelector('footer') !== null) {
                footer.style.bottom = '6vh';
                footer.style.opacity = 1;
            }
            if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
                languageSwitch.style.opacity = 1;
                themeSwitch.style.opacity = 1;
            }
        }, 1500)
    }
})

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
    }, 1000)
    }
    setTimeout(function() { 
        window.location.href = href;
    }, 1000)
    setTimeout(function() { 
        document.querySelector('body').style.opacity = 1;
    }, 1500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() {
        document.querySelector('body').style.opacity = 1;
        header.style.top = '6vh';
        if (footer !== null) {
            footer.style.bottom = '6vh';
        }
        if (window.location.href.includes("about.html") || window.location.href.includes("fr-about.html") || window.location.href.includes("work.html") || window.location.href.includes("fr-work.html") || window.location.href.includes("contact.html") || window.location.href.includes("fr-contact.html")) {
            languageSwitch.style.display = "none";
            themeSwitch.style.display= "none";
        }
    }, 500)
});

