export const productDetailsElement = (product) => {
    const productTypeIcon = product.type === "sell" ? typeSell() : typeBuy();
    const owner = product.user.nickname || "Anonymous" 
    const date = new Date(product.updatedAt);
    const element = `
        <div class="product-image">
            <img src="${product.image}" alt="Product photo">
        </div>
        <div class="product-header">
            <div class="hd-1">${product.price} $</div>    
            <div class="card-type">${productTypeIcon}</div>    
        </div>
        <div class="hd-2">${product.title}</div>
        <div class="card-text">${product.description}</div>
        <div class="product-user">
            <div class="card-type">
                <span class="material-symbols-outlined">mood</span>
                <p>${owner}</p>
            </div>
            <div class="card-text">Product uploaded at ${date.toLocaleString()}</div>
        </div>

    `;

    return element;
}

export const removeButtonElement = () => {
    const element = document.createElement("button");
    element.classList.add("btn", "error");
    element.textContent = "Delete product";

    return element;
};

const typeSell = () => {
    return `
        <span class="material-symbols-outlined">sell</span>
        <p>Wants to Sell</p>
    `;
};

const typeBuy = () => {
    return `
        <span class="material-symbols-outlined">shopping_cart</span>
        <p>Wants to Buy</p>
    `;
};