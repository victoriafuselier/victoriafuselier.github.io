const navButton = document.querySelector('#nav-button');
const navDiv = document.querySelector('.nav');
const main = document.querySelector('main'); 
const footer = document.querySelector('footer');

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

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})