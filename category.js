const categoryImages = [
    {
        image: 'Images/Categories/tintin_192x166.png',
        title: 'DK Comics'
    },
    {
        image: 'Images/Categories/batman-192x166.png',
        title: 'US Comics'
    },
    {
        image: 'Images/Categories/live_192x166.png',
        title: 'Live Rollespil'
    },
    {
        image: 'Images/Categories/kortspil_192x166.png',
        title: 'Kortspil'
    },
    {
        image: 'Images/Categories/braet_192x166.png',
        title: 'Brætspil'
    },
    {
        image: 'Images/Categories/merch_192x166.png',
        title: 'Merchandise'
    },
    {
        image: 'Images/Categories/antikvarisk_192x166.png',
        title: 'Antikvarisk'
    },
    {
        image: 'Images/Categories/manga_192x166.png',
        title: 'Manga'
    },
    {
        image: 'Images/Categories/udklaedning_192x166.png',
        title: 'Udklædning'
    },
    {
        image: 'Images/Categories/figurspil_192x166.png',
        title: 'Figurspil'
    },
    {
        image: 'Images/Categories/rollespil_192x166.png',
        title: 'Rollespil'
    },
    {
        image: 'Images/Categories/boeger_192x166.png',
        title: 'Bøger'
    }
]
 
let section = document.getElementById('categories');

categoryImages.forEach(catImage => {
    section.innerHTML += `<div class="category-item"><img src="${catImage.image}"><h2>${catImage.title}</h2></div>`;
});

// Apply styles to title elements
const categoryItems = document.querySelectorAll('#categories .category-item');

categoryItems.forEach(categoryItem => {
    categoryItem.style.display = 'inline-block';
    categoryItem.style.verticalAlign = 'top';
    categoryItem.style.marginRight = '20px';
    categoryItem.style.marginTop = '15px'
    
});

const titleElements = document.querySelectorAll('#categories .category-item h2');

titleElements.forEach(titleElement => {
    titleElement.style.backgroundColor = "black";
    titleElement.style.color = "white";
    titleElement.style.padding = "10px"; 
    titleElement.style.marginTop = "10px";
    titleElement.style.marginBottom = "20px";
    titleElement.style.textAlign = "center";
    titleElement.style.fontFamily = "faraos"
    titleElement.style.fontWeight = "regular"
    titleElement.style.letterSpacing = "2px";

    titleElement.classList.add('title-hover');
});

section.style.textAlign = 'center';
section.style.marginRight ="12%"
section.style.marginLeft ="12%"
