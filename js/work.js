window.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll('.project-container');

    function clearStates(except = null) {
        projectContainers.forEach(container => {
            if (container !== except) {
                container.classList.remove('hover', 'focused');
            }
        });
    }

    projectContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            clearStates();
            container.classList.add('hover');
        });

        container.addEventListener('mouseleave', () => {
            container.classList.remove('hover');
        });

        container.addEventListener('focusin', () => {
            clearStates();
            container.classList.add('focused');
        });

        container.addEventListener('focusout', () => {
            setTimeout(() => {
                if (!container.contains(document.activeElement)) {
                    container.classList.remove('focused');
                }
            }, 0);
        });
    });
});