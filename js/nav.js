const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const navIcon = document.querySelector('#nav-icon');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');
const languageButton = document.querySelector('#language-button');
const themeButton = document.querySelector('#theme-button');
const header = document.querySelector("header");

// Function to restore state when page is loaded from bfcache
function restorePageState() {
    const isOpened = navButton.getAttribute('aria-expanded');

    if (isOpened === 'true') {
        // If navigation menu was open, restore its state
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-xmark');
        navButton.setAttribute('title', '');
        navDiv.style.display = 'block';
        navDiv.style.opacity = 1;
    } else {
        // If navigation menu was closed, restore its state
        navIcon.classList.remove('fa-xmark');
        navIcon.classList.add('fa-bars');
        navButton.setAttribute('title', 'Menu');
        navDiv.style.display = 'none';
    }

    // Restore other elements' styles
    body.style.opacity = 1;
    header.style.top = '6vh';
    if (footer !== null) {
        footer.style.bottom = '6vh';
    }
    if (window.location.href.includes("about.html") || window.location.href.includes("fr-about.html") || window.location.href.includes("work.html") || window.location.href.includes("fr-work.html") || window.location.href.includes("contact.html") || window.location.href.includes("fr-contact.html")) {
        languageButton.style.display = "none";
        themeButton.style.display= "none";
    } else {
        languageButton.style.display = "inline";
        themeButton.style.display = "block";
    }
}

// Event listener for pageshow event
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page is loaded from the bfcache
        restorePageState();
    }
});

// Event listener for navButton click (toggle navigation)
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
                languageButton.style.display = 'inline';
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

// Function to handle transition to another page
window.transitionToPage = function(href, event) {
    event.preventDefault();
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

// Event listeners for all links
const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        var href = this.getAttribute('href');
        transitionToPage(href, event);
    });
}

// Function to run when DOM content is loaded
document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() {
        document.querySelector('body').style.opacity = 1;
        header.style.top = '6vh';
        if (footer !== null) {
            footer.style.bottom = '6vh';
        }
        restorePageState(); // Restore page state on initial load
    }, 500);
});