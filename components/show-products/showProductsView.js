export const productElement = (product) => {
    const element = `
        <a href="#">
            <div class="card">
                <img src="${product.image}" alt="">
                <div class="card-body">
                    <div class="card-title">${product.price} $</div>
                    <div class="card-text">${product.title}</div>
                </div>
            </div>
        </a>
    `;

    return element;
};

export const productEmptyWarning = () => {
    const warning = `
        <h3>Oops, no products available! 😬</h3>
    `;

    return warning;
};