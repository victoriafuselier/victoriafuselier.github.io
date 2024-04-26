const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');
const body = document.querySelector('body');

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navButton.setAttribute('aria-expanded', 'true');
        main.style.display ='none';
        navDiv.style.display ='block';
        footer.style.display = 'none';
    } else {
        navButton.setAttribute('aria-expanded', 'false');
        navDiv.style.display = 'none';
        main.style.display = 'flex';    
        footer.style.display = 'block';   
    }
})

body.addEventListener('load', ()=> {
    if (main.classList.contains('about') || main.classList.contains('work') || main.classList.contains('contact')) {
        const themeButton = document.querySelector('.theme-switch-container');
        const languageButton = document.querySelector('.language-switch-container');
        themeButton.style.transform = "translateY(10px)";

    }
});

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})