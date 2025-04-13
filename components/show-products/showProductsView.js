export const productElement = (product) => {
    const element = `
        <li>
            <div class="card">
                <img src="${product.image}" alt="">
                <div class="card-body">
                    <div class="card-title">${product.price}</div>
                    <div class="card-text">${product.title}</div>
                </div>
            </div>
        </li>
    `;

    return element;
};