// Sélection du bouton et du titre par leur ID
const button = document.getElementById('myButton');
const title = document.getElementById('mainTitle');

button.addEventListener('click', function() {
    // Changer le texte du titre
    title.textContent = 'Arrachez-vous';
    
    // Après 2 secondes, rétablir le texte initial
    setTimeout(() => {
        title.textContent = 'Mon Titre Centré';
    }, 2000);
});
