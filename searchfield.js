// Variabler
let products = [
    { name: 'Star Wars', image: 'Images/produktbilleder/starwars1.jpg' },
    { name: 'Star Wars', image: 'Images/produktbilleder/starwars2.jpg' },
    { name: 'Star Wars', image: 'Images/produktbilleder/starwars3.jpg' },
    { name: 'Star Wars', image: 'Images/produktbilleder/starwars4.jpg' },
    { name: 'Star Wars', image: 'Images/produktbilleder/starwars5.jpg' },
];

let searchInput = document.getElementById('searchInput');
let resultsContainer = document.getElementById('results');
let searchPopup = document.getElementById('searchPopup');
let openSearchBtn = document.getElementById('searchBtn'); // Opdateret knap
let closeBtn = document.getElementById('closeBtn');

document.addEventListener('DOMContentLoaded', function() {
    let searchBtn = document.getElementById('searchBtn');
    let searchPopup = document.getElementById('searchPopup');
    let closeBtn = document.getElementById('closeBtn');

    // Åbn popup når søgeknappen klikkes
    searchBtn.addEventListener('click', function() {
        searchPopup.classList.add('active');
    });

    // Luk popup når lukknappen klikkes
    closeBtn.addEventListener('click', function() {
        searchPopup.classList.remove('active');
    });
});

// Simuleret søgefunktion
function search(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Eventlistener til søgeknappen
document.getElementById('searchBtn').addEventListener('click', function() {
    let query = searchInput.value.trim(); // Fjerner eventuelle mellemrum i starten og slutningen af søgestrengen
    let results = search(query); // Udfører søgningen

    // Viser resultaterne, hvis der er nogle, ellers vises en besked om ingen resultater
    if (results.length > 0) {
        displayResults(results);
    } else {
        resultsContainer.innerHTML = '<li>Ingen resultater fundet.</li>';
    }
});

// Funktion til at vise søgeresultater
function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = result.image;
        img.alt = result.name;
        li.textContent = result.name;
        li.appendChild(img);
        resultsContainer.appendChild(li);
    });
}

