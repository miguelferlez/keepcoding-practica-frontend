export const productElement = (product) => {
    const productTypeIcon = product.type === "sell" ? typeSell() : typeBuy();
    const element = `
        <a href="#">
            <div class="card">
                <img src="${product.image}" alt="">
                <div class="card-body">
                    <div class="card-title">${product.price} $</div>
                    <div class="card-text title">${product.title}</div>
                    <div class="card-text description">${product.description}</div>
                    <div class="card-type">${productTypeIcon}</div>
                </div>
            </div>
        </a>
    `;

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

export const productEmptyWarning = () => {
    const warning = `
        <h3 class="hd-2 card-text">Oops, no products available! 😬</h3>
    `;

    return warning;
};