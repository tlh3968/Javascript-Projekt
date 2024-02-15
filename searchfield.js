// Variabler
let products = [
    { name: 'star wars', image: 'starwars1.jpg' },
    { name: 'star wars', image: 'starwars2.jpg' },
    { name: 'star wars', image: 'starwars3.jpg' },
    { name: 'star wars', image: 'starwars4.jpg' },
    { name: 'star wars', image: 'starwars5.jpg' },
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

// Funktion til at vise søgeresultater
function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<li>Ingen resultater fundet.</li>';
    } else {
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
}

// Simuleret søgefunktion
function search(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Eventlistener til søgeknappen
document.getElementById('searchBtn').addEventListener('click', function() {
    let query = searchInput.value.trim(); // Fjerner eventuelle mellemrum i starten og slutningen af søgestrengen
    let results = search(query); // Udfører søgningen
    displayResults(results); // Viser resultaterne
});
