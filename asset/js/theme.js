// Fonction pour basculer le thème
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById('theme-btn');
  const currentTheme = body.getAttribute('data-theme');
  const isDark = currentTheme === 'dark';

  // Basculer le thème
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  // Changer l'icône
  themeBtn.innerHTML = isDark 
    ? '<ion-icon name="moon-outline"></ion-icon>' 
    : '<ion-icon name="sunny-outline"></ion-icon>';

  // Sauvegarder la préférence
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Fonction pour initialiser le thème
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const themeBtn = document.getElementById('theme-btn');
  
  document.body.setAttribute('data-theme', savedTheme);
  themeBtn.innerHTML = savedTheme === 'dark' 
    ? '<ion-icon name="sunny-outline"></ion-icon>' 
    : '<ion-icon name="moon-outline"></ion-icon>';
}

// Ajouter l'écouteur d'événement au bouton
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-btn');
  themeBtn.addEventListener('click', toggleTheme);
  initTheme();
}); 