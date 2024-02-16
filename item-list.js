function changeImage(x, Image) {
    const imagePaths = [
        null,
        'Images/Item-list/Tilbud/cup2.jpg',
        'Images/Item-list/Tilbud/cup1.jpg',
        'Images/Item-list/Tilbud/gam2.jpg',
        'Images/Item-list/Tilbud/gam1.jpg',
        'Images/Item-list/Tilbud/hero2.jpg',
        'Images/Item-list/Tilbud/hero1.jpg',
        'Images/Item-list/Tilbud/movie2.jpg',
        'Images/Item-list/Tilbud/movie1.jpg',
        'Images/Item-list/Tilbud/satan2.jpg',
        'Images/Item-list/Tilbud/satan1.jpg'
    ];

    if (x >= 1 && x <= 10) {
        Image.src = imagePaths[x];
    }
    
    function increaseFontSize() {
        var itemPriceOffer = document.querySelector('.item-price-offer');
        itemPriceOffer.style.fontSize = '1.7em';
    }

    function resetFontSize() {
        var itemPriceOffer = document.querySelector('.item-price-offer');
        itemPriceOffer.style.fontSize = ''; // Reset to the default font size
    }
}