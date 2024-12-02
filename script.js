// Récupération des éléments HTML
const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

// Début du glisser
draggable.addEventListener("dragstart", (event) => {
  event.target.style.opacity = "0.5"; // Rend l'élément semi-transparent pendant le glisser
});

// Fin du glisser
draggable.addEventListener("dragend", (event) => {
  event.target.style.opacity = "1"; // Restaure l'opacité de l'élément
});

// Autoriser le dépôt dans la zone
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault(); // Permet le dépôt en annulant le comportement par défaut
  dropzone.style.borderColor = "#f1c40f"; // Change la couleur de la bordure pour signaler l'état actif
});

// Réinitialiser la zone de dépôt en cas de sortie
dropzone.addEventListener("dragleave", () => {
  dropzone.style.borderColor = "#2ecc71"; // Réinitialise la bordure
});

// Effectuer le dépôt
dropzone.addEventListener("drop", (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du navigateur qui empêche le dépôt d'éléments
  event.target.style.borderColor = "#2ecc71"; // Réinitialise la bordure
  event.target.textContent = "Merci pour le dépôt !"; // Change le texte de la zone de dépôt
});
