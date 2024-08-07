const educationButton = document.querySelector('#education-button');
const skillsButton = document.querySelector('#skills-button');
const popUpDiv = document.querySelector('#pop-up-div');

educationButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }

    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';

    popUpDiv.innerHTML =    `<div id='pop-up-box'>
                                <button class="close">x</button>
                                <h2>Éducation</h2>
                                <ul id="education">
                                    <li>Baccalauréat,<br>Université d'État de Louisiane</li>
                                    <li>FreeCodeCamp</li>
                                    <li>Piste de développement Web front-end,<br>Treehouse</li>
                                    <li>Code Adventures,<br>Treehouse</li>
                                    <li><a target="_blank" href="../html/techdegree.html">Diplôme technique en développement Web front-end  <i class="fa-regular fa-file-pdf"></i></a></li>
                                </ul>
                            </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();
});

skillsButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }

    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';
    
    popUpDiv.innerHTML =    `<div id="pop-up-box">
                                <button class="close">x</button>
                                <h2>Compétences</h2>
                                <div id="skills">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                            <ul class="sublist">
                                                <li>Grille</li>
                                                <li>Boîte flexible</li>
                                                <li>Transformations et transitions</li>
                                                <li>Animations d'images clés</li>
                                                <li>Sass</li>
                                                <ul>
                                                    <li class="sublist-level-2">et plus!</li>
                                                </ul>                            
                                            </ul>
                                        <li>JavaScript</li>
                                            <ul class="sublist">
                                                <li>Sélecteurs DOM</li>
                                                <li>Manipulation du DOM</li>
                                                <li>Traversée du DOM</li>
                                                <li>Fonctions de rappel</li>
                                                <li>Méthodes de tableau</li>
                                                <li>Méthodes d'itération de tableau</li>
                                                <li>JavaScript orienté objet</li>
                                                <li>Interactions d'objets</li>
                                                <li>jQuery</li>
                                                <li>Récupérer l'API</li>
                                                    <ul>
                                                        <li class="sublist-level-2">et plus!</li>
                                                    </ul>
                                            </ul>
                                        <li>Création de sites web</li>
                                        <li>Conception réactive</li>
                                        <li>Accessibilité</li>
                                        <li>Bootstrap</li>
                                        <li>Github</li>
                                        <li>Les bases du SVG</li>
                                        <li>Les bases d'AJAX</li>
                                        <li>Débogage avec Chrome DevTools</li>
                                    </ul>
                                    <p>Si vous souhaitez voir une liste complète de ce que j'ai appris, consultez mon <a class="treehouse-link" href="https://teamtreehouse.com/profiles/victoriafuselier" target="_blank">profil Treehouse</a>.</p>
                                </div>
                            </div>`;
    let closeButton = document.querySelector('.close');
    closeButton.focus();                            
});


popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        popUpDiv.classList.add('hidden');
        popUpDiv.innerHTML = ``;
        popUpDiv.style.height = '0px';
    }
});

popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('pop-up-div')) {
        popUpDiv.classList.add('hidden');
        popUpDiv.innerHTML = ``;
        popUpDiv.style.height = '0px';
    }
});