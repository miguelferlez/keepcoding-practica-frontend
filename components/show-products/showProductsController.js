import { getProducts } from "./showProductsModel.js";
import { productElement, productEmptyWarning } from "./showProductsView.js";

export async function showProducts(container) {
    const render = (products, container) => {
        container.innerHTML = "";

        if (!!products.length > 0) {
            products.forEach(product => {
                const productItem = document.createElement("li");
                productItem.innerHTML = productElement(product);
                container.appendChild(productItem);
            });
        } else {
            container.classList.toggle("warning");
            container.innerHTML = productEmptyWarning();
        }
    };

    try {
        const startedLoad = new CustomEvent("load-products-started");
        container.dispatchEvent(startedLoad);

        const products = await getProducts();
        render(products, container);
    } catch (error) {
        alert(error.message);
    } finally {
        const finishedLoad = new CustomEvent("load-products-finished");
        container.dispatchEvent(finishedLoad);
    }

}