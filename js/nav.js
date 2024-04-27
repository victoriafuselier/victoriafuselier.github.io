const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const logoContainer = document.querySelector('#logo-container');
const languageSwitchContainer = document.querySelector('#language-switch-container');
const themeSwitchContainer = document.querySelector('#theme-switch-container');
const navButtonContainer = document.querySelector('#nav-button-container');
const header = document.querySelector("header");

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
        main.style.display ='none';
        navDiv.style.display ='block';
        languageSwitchContainer.style.display = 'none';
        themeSwitchContainer.style.display = 'none';
        if (document.querySelector('footer') !== null) {
            footer.style.display = 'none';
        }
    } else {
        navButton.setAttribute('aria-expanded', 'false');
        navDiv.style.display = 'none';
        main.style.display = 'flex';    
        if (document.querySelector('footer') !== null) {
            footer.style.display = 'block';
        }
        if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
            languageSwitchContainer.style.display = 'block';
            themeSwitchContainer.style.display = 'block';
        }
   
    }
})

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 600)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
    header.style.top = '6vh';
    if (footer !== null) {
        footer.style.bottom = '6vh';
    }
    if (window.location.href.includes("about.html") || window.location.href.includes("fr-about.html") || window.location.href.includes("work.html") || window.location.href.includes("fr-work.html") || window.location.href.includes("contact.html") || window.location.href.includes("fr-contact.html")) {
        languageSwitchContainer.style.display = "none";
        themeSwitchContainer.style.display= "none";
    }
});

