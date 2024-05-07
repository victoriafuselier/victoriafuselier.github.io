const projectLinks = document.getElementsByClassName('project-links');

for (let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('focus', () => {
        projectLinks[i].parentNode.style.opacity = 1;
        projectLinks[i].parentNode.style.boxShadow = '5px 5px 18px rgba(0, 0, 0, 0.8), -5px -5px 18px rgba(0, 0, 0, 0.8)';
    });
    projectLinks[i].addEventListener('focusout', () => {
        projectLinks[i].parentNode.style.opacity = 0;
        projectLinks[i].parentNode.style.boxShadow = 'unset';
    });
};

const projectContainers = document.getElementsByClassName('project-container');

for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].addEventListener('focus', () => {
        projectContainers[i].querySelector('.photo-overlay').style.opacity = 1;
        projectContainers[i].querySelector('.photo-overlay').style.boxShadow = '5px 5px 18px rgba(0, 0, 0, 0.8), -5px -5px 18px rgba(0, 0, 0, 0.8)';
    });
    projectContainers[i].addEventListener('focusout', () => {
        projectContainers[i].querySelector('.photo-overlay').style.opacity = 0;
        projectContainers[i].querySelector('.photo-overlay').style.boxShadow = 'unset';
    });
};