async function fetchProducts() {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json();
    return data.categories;
}

function filterProducts(categoryName) {
    fetchProducts().then(categories => {
        const category = categories.find(cat => cat.category_name === categoryName);
        displayProducts(category.category_products);
    });
}

filterProducts('Men');
