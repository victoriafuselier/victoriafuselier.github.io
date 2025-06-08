// GLOBAL VARIABLES
let bodyElement, logo, bioImg, contactIcons, themeIcon, themeButton, fontButton;

// THEME
function applyTheme(theme) {
    bodyElement.classList.remove('light', 'dark');
    bodyElement.classList.add(theme);

    // Update logo 
    if (logo) {
        logo.src = theme === 'dark' ? '/images/icons/logo-light.png' : '/images/icons/logo-dark.png';
    }

    // Update bio img box shadow
    if (bioImg) {
        const color = theme === 'dark' ? '#696969' : '#163746';
        bioImg.style.boxShadow = `4px 4px 10px ${color}, -4px -4px 10px ${color}, 4px -4px 10px ${color}, -4px 4px 10px ${color}`;
    }

    // Update theme toggle button icon
    if (themeIcon) {
        themeIcon.classList.toggle('fa-moon', theme === 'light');
        themeIcon.classList.toggle('fa-sun', theme === 'dark');
    }

    localStorage.setItem('theme', theme);
}

// FONT
function applyFont(font) {
    bodyElement.classList.remove('roboto', 'quicksand');
    bodyElement.classList.add(font);
    localStorage.setItem('font', font);
}

// INITIALIZE
function initializeSettings() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedFont = localStorage.getItem('font') || 'quicksand';
    applyTheme(savedTheme);
    applyFont(savedFont);
}

// TOGGLE HANDLERS
function toggleTheme() {
    const currentTheme = bodyElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function toggleFont() {
    const currentFont = bodyElement.classList.contains('roboto') ? 'roboto' : 'quicksand';
    const newFont = currentFont === 'roboto' ? 'quicksand' : 'roboto';
    applyFont(newFont);
}

// EVENT LISTENER
window.addEventListener('DOMContentLoaded', () => {
    bodyElement = document.querySelector('body');
    logo = document.getElementById('logo');
    bioImg = document.querySelector('#bio-img');
    contactIcons = document.querySelectorAll('.contact-icon');
    themeIcon = document.getElementById('theme-icon');
    themeButton = document.getElementById('theme-button');
    fontButton = document.getElementById('font-button');
    
    initializeSettings();

    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    if (fontButton) {
        fontButton.addEventListener('click', toggleFont);
    }
});