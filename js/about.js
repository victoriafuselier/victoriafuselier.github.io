const educationButton = document.querySelector('#education-button');
const skillsButton = document.querySelector('#skills-button');
const popUpDiv = document.querySelector('#pop-up-div');
const skillsModal = document.querySelector('#skills-modal');
const educationModal = document.querySelector('#education-modal');

educationButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }
    if (educationModal.classList.contains('hidden')) {
        educationModal.classList.remove('hidden');
    }
    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';
    let closeButton = document.querySelector('.close');
    closeButton.focus();
});

skillsButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }
    if (skillsModal.classList.contains('hidden')) {
        skillsModal.classList.remove('hidden');
    }
    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';    
    let closeButton = document.querySelector('.close');
    closeButton.focus();                            
});


popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('close') || e.target.id === 'pop-up-div') {
        popUpDiv.classList.add('hidden');
        if (!educationModal.classList.contains('hidden')) {
            educationModal.classList.add('hidden');
        }
        if (!skillsModal.classList.contains('hidden')) {
            skillsModal.classList.add('hidden');
        }
        popUpDiv.style.height = '0px';
    }
});