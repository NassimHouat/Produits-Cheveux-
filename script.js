// Exemple d'interaction : message lorsqu'on clique sur le bouton "Commander"
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.btn');
    buyButton.addEventListener('click', function() {
        alert('Merci de votre intérêt ! Vous allez être redirigé vers notre boutique.');
    });
});