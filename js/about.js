const educationButton = document.querySelector('#education-button');
const skillsButton = document.querySelector('#skills-button');
const popUpDiv = document.querySelector('#pop-up-div');
const modals = {
    education: document.querySelector('#education-modal'),
    skills: document.querySelector('#skills-modal')
};
let activeModal = null;
let focusTrapHandler = null;

function openModal(type) {
    const modal = modals[type];
    if (!modal) return;
    activeModal = modal;
    popUpDiv.classList.remove('hidden');
    modal.classList.remove('hidden');
    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';
    const closeButton = modal.querySelector('.modal-close-button');
    if (closeButton) {
        requestAnimationFrame(() => closeButton.focus());
    }
    trapFocus(modal);
}

function closeModal() {
    if (!activeModal) return;
    popUpDiv.classList.add('hidden');
    activeModal.classList.add('hidden');
    popUpDiv.style.height = '0px';
    popUpDiv.style.width = '0px';
    if (focusTrapHandler) {
        activeModal.removeEventListener('keydown', focusTrapHandler);
        focusTrapHandler = null;
    }
    activeModal = null;
}

function trapFocus(modal) {
    const focusableSelectors = 'button, a, [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
        .filter(el => !el.disabled && el.offsetParent !== null);
    if (focusableElements.length === 0) return;
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];
   focusTrapHandler = function (e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            if (document.activeElement === lastEl) {
                e.preventDefault();
                firstEl.focus();
            } 
        }
    };
    modal.addEventListener('keydown', focusTrapHandler); 
}

educationButton.addEventListener('click', () => openModal('education'));
skillsButton.addEventListener('click', () => openModal('skills'));
document.querySelectorAll('.modal-close-button').forEach(btn => {
    btn.addEventListener('click', closeModal);
});

popUpDiv.addEventListener('click', (e) => {
    if (e.target.id === 'pop-up-div') {
        closeModal();
    }
});