// Funkce pro zobrazení/skrytí hamburger menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Přepnutí třídy 'show' pro zobrazení/skrytí menu