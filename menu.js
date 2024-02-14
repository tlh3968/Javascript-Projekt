window.addEventListener('scroll', function() { // function der venter på scroll
    var header = document.querySelector('header');
    var menu1 = document.getElementById('menu1');
    var mainMenu = document.querySelector('.mainmenu');
    var existingLogo = document.querySelector('.logo-small');
    var mainmenuItems = document.querySelectorAll('.mainmenu li');

    // Finder den nuværende scroll position
    var scrollPosition = window.scrollY;

    // Bruger nedenstående script hvis scroll længden er mere end 20
    if (scrollPosition > 20) {
        menu1.style.display = 'none';
        header.style.height = '80px';

        // Hvis logoet ikke findes bliver det lavet og tildelt nedenstående styles
        if (!existingLogo) { // "!" betyder at den kun bruger koden hvis existingLogo ikke findes
            var logoSmall = document.createElement('img');
            logoSmall.src = './Images/Logos/logo-small.png';
            logoSmall.alt = 'Small Logo';
            logoSmall.classList.add('logo-small'); // Tildeler en klasse til CSS styling
            mainMenu.parentElement.insertBefore(logoSmall, mainMenu); // Indsætter logoet før parent elementet mainmenu
        }

        // Sætter højden for hvert li item i mainmenu
        mainmenuItems.forEach(function(item) {
            item.style.height = '70px';
        });

    } else { // Bruger nedenstående script hvis scroll længden er mindre end 20
        menu1.style.display = 'flex';
        header.style.height = '138px';

        // Fjerner logoet hvis det allerede eksisterer
        if (existingLogo) {
            existingLogo.remove();
        }

        // Reset højden på li til auto (loop)
        mainmenuItems.forEach(function(item) {
            item.style.height = '';
        });
    }
});
