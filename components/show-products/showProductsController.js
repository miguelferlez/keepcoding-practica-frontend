import { placeholderImage } from "../utils/const.js";
import { getProducts } from "./showProductsModel.js";
import { productElement, productEmptyWarning } from "./showProductsView.js";

export async function showProducts(container) {
    const render = (products, container) => {
        container.innerHTML = "";

        if (!!products.length > 0) {
            products.forEach(product => {
                const productItem = document.createElement("li");
                
                if (!product.image) {
                    product.image = placeholderImage;
                }

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
        const failedLoad = new CustomEvent("load-products-failed", {
            detail: error.message
        });
        container.dispatchEvent(failedLoad);
    } finally {
        const finishedLoad = new CustomEvent("load-products-finished");
        container.dispatchEvent(finishedLoad);
    }

}