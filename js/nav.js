const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const languageSwitchContainer = document.querySelector('#language-switch-container');
const themeSwitchContainer = document.querySelector('#theme-switch-container');
const navButtonContainer = document.querySelector('#nav-button-container');
const header = document.querySelector("header");

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
        main.style.opacity = 0;
        if (document.querySelector('footer') !== null) {
            footer.style.bottom = '-100%';
        }
        languageSwitchContainer.style.opacity = 0;
        themeSwitchContainer.style.opacity = 0;
        setTimeout(function() {
            navDiv.style.display ='block';
            navDiv.style.opacity = 1;
            main.style.display = 'none';
            main.style.opacity = 0;
            themeSwitchContainer.style.display = 'none';
            languageSwitchContainer.style.display = 'none';
        }, 1000)
    } else {
        navButton.setAttribute('aria-expanded', 'false');
        navDiv.style.opacity = 0;
        themeSwitchContainer.style.display = 'block';
        languageSwitchContainer.style.display = 'block';
        if (document.querySelector('footer') !== null) {
            footer.style.display = 'block';
            footer.style.bottom = '6vh';
        }
        setTimeout(function() {   
            if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
                languageSwitchContainer.style.opacity = 1;
                themeSwitchContainer.style.opacity = 1;
            }
            main.style.display = 'flex';
            main.style.opacity = 1; 
        }, 1000)
    }
})

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('main').style.opacity = 1;
    header.style.top = '6vh';
    if (footer !== null) {
        footer.style.bottom = '6vh';
    }
    if (window.location.href.includes("about.html") || window.location.href.includes("fr-about.html") || window.location.href.includes("work.html") || window.location.href.includes("fr-work.html") || window.location.href.includes("contact.html") || window.location.href.includes("fr-contact.html")) {
        languageSwitchContainer.style.display = "none";
        themeSwitchContainer.style.display= "none";
    }
});

