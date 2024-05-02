const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const languageSwitchContainer = document.querySelector('#language-switch-container');
const themeSwitchContainer = document.querySelector('#theme-switch-container');
const navButtonContainer = document.querySelector('#nav-button-container');
const header = document.querySelector("header");
const logo = document.querySelector('#logo');

navButtonContainer.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        body.style.opacity = 0;
        // main.style.opacity = 0;
        // navButton.style.opacity = 0;
        // logo.style.opacity = 0;
        header.style.top = '-6vh';
        if (footer !== null) {
            footer.style.bottom = '-6vh';
            // footer.style.opacity = 0;
        }
        // if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
        //     languageSwitchContainer.style.opacity = 0;
        //     themeSwitchContainer.style.opacity = 0;
        // }
        setTimeout(function() {
            main.style.display = 'none';
            themeSwitchContainer.style.display = 'none';
            languageSwitchContainer.style.display = 'none';
            navButton.setAttribute('aria-expanded', 'true');
            navButton.classList.remove('fa-bars');
            navButton.classList.add('fa-xmark');
            navButton.setAttribute('title', '');
            navDiv.style.display ='block';
        }, 1000);
        setTimeout(function() {
            // navDiv.style.opacity = 1;
            // navButton.style.opacity = 1;
            // logo.style.opacity = 1;
            header.style.top = '6vh';
            body.style.opacity = 1;
            navDiv.style.opacity = 1;
        }, 1100);
        // setTimeout(function() {
        // }, 1200);
    } else {
        // navDiv.style.opacity = 0;
        // navButton.style.opacity = 0;
        // logo.style.opacity = 0;
        body.style.opacity = 0;
        header.style.top = '-6vh';
        if (footer !== null) {
            footer.style.bottom = '-6vh';
        }
        setTimeout(function() {   
            navButton.classList.remove('fa-xmark');
            navButton.classList.add('fa-bars');
            navButton.setAttribute('title', 'Menu');
            navButton.setAttribute('aria-expanded', 'false');
            navDiv.style.display = 'none';
            main.style.display = 'flex';
            if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
                themeSwitchContainer.style.display = 'block';
                languageSwitchContainer.style.display = 'block';
            }
        }, 1000)
        setTimeout(function() {
            // main.style.opacity = 1;
            // navButton.style.opacity = 1;
            // logo.style.opacity = 1;
            body.style.opacity = 1;
            header.style.top = '6vh';
            if (footer !== null) {
                footer.style.bottom = '6vh';
                // footer.style.opacity = 1;
            }
            // if (window.location.href.includes('index.html') || window.location.href.includes('fr-index.html')) {
            //     languageSwitchContainer.style.opacity = 1;
            //     themeSwitchContainer.style.opacity = 1;
            // }
        }, 1100)
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
            languageSwitchContainer.style.display = "none";
            themeSwitchContainer.style.display= "none";
        }
    }, 500)
});

