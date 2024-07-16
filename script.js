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

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-vendor">${product.vendor}</div>
            </div>
            <div class="price-info">
                <div class="product-price">Rs ${product.price}</div>
                <div class="product-compare">${product.compare_at_price}.00</div>
                <div class="discount">${discount}% Off</div>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

filterProducts('Men');
