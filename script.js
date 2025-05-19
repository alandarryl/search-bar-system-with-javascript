const performSearch = () => {
    // console.log("Search function triggered");
    const searchInput = document.getElementById('search-item').value.toLowerCase();
    const products = document.querySelectorAll('.product'); // Récupère tous les produits

    products.forEach(product => {
        const productName = product.querySelector('h2'); // Récupère le <h2> dans chaque produit
        if (productName) {
            const textValue = productName.textContent || productName.innerHTML;
            if (textValue.toLowerCase().indexOf(searchInput) > -1) {
                product.style.display = ''; // Affiche le produit
            } else {
                product.style.display = 'none'; // Cache le produit
            }
        }
    });
};

// big things learn in this product is that the code will act in weird
// if the function and the name of the input are the same 