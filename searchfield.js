// Variabler
let products = ['Marvel01', 'Marvel02', 'Marvel03', 'Marvel04', 'Marvel05','Star Wars 1', 'Star Wars 2', 'Star Wars 3', 'Star Wars 4', 'Star Wars 5'];
let searchInput = document.getElementById('searchInput');
let resultsContainer = document.getElementById('results');

// Eventlistener til at åbne pop-up ved klik på søgeknappen
document.getElementById('searchBtn').addEventListener('click', function() {
    document.getElementById('searchPopup').style.display = 'flex';
});

// Eventlistener til at lukke pop-up
document.getElementById('closeBtn').addEventListener('click', function() {
    closePopup();
});

// Eventlistener til at lytte efter ændringer i søgefeltet
searchInput.addEventListener('input', function() {
    let searchTerm = searchInput.value.toLowerCase();
    let results = [];

    // Filtrer produkter baseret på søgeterm
    for (let i = 0; i < products.length; i++) {
        if (products[i].toLowerCase().includes(searchTerm)) {
            results.push(products[i]);
        }
    }

    // Opdater DOM med søgeresultater
    displayResults(results);
});

// Funktion til at lukke pop-up
function closePopup() {
    document.getElementById('searchPopup').style.display = 'none';
}

// Funktion til at vise søgeresultater i DOM'en
function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'Ingen resultater fundet.';
    } else {
        for (let i = 0; i < results.length; i++) {
            let productDiv = document.createElement('div');
            productDiv.textContent = results[i];
            resultsContainer.appendChild(productDiv);
        }
    }
};