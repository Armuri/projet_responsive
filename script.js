const imageGlissante = document.querySelector('.image-glissante');
let currentWindowWidth = window.innerWidth;

imageGlissante.addEventListener('animationend', (event) => {
  if (event.animationName === 'slideAnimation2') {
    imageGlissante.classList.add('hide-after-slideAnimation2');
  }
});

// Fonction pour gérer la visibilité de l'image en fonction de la largeur de l'écran
function handleImageVisibility() {
  const newWindowWidth = window.innerWidth;
  
  // Vérifiez si la largeur de la fenêtre a changé de manière significative
  if (Math.abs(newWindowWidth - currentWindowWidth) > 500) {
    currentWindowWidth = newWindowWidth;

    if (currentWindowWidth > 769) {
      // Si la largeur de l'écran est supérieure à 769px, retirez la classe qui masque l'image
      imageGlissante.classList.remove('hide-after-slideAnimation2');
    }
  }
}

// Appelez la fonction pour gérer la visibilité de l'image au chargement de la page
handleImageVisibility();

// Ajoutez un écouteur d'événement de redimensionnement de fenêtre pour gérer la visibilité de l'image lorsque la largeur de l'écran change
window.addEventListener('resize', handleImageVisibility);