import { getPages } from "../pagination/paginationModel.js";
import { placeholderImage, placeholderNotFoundImage } from "../utils/const.js";
import { getProducts, getProductsByTitle, getProductsLimit, verifyProductImage } from "./showProductsModel.js";
import { productElement, productEmptyWarning } from "./showProductsView.js";

export async function showProducts(container, searchParam, currentPage) {
    const render = (products, container) => {
        container.innerHTML = "";

        if (!!products.length > 0) {
            products.forEach(async product => {
                const productItem = document.createElement("li");

                productItem.innerHTML = productElement(product);
                container.appendChild(productItem);
                
                if (product.image) {
                    product.image = await verifyProductImage(product.image, placeholderNotFoundImage)
                } else {
                    product.image = placeholderImage;
                }
            });
        } else {
            container.classList.toggle("warning");
            container.innerHTML = productEmptyWarning();
        }
    };

    try {
        const startedLoad = new CustomEvent("load-products-started");
        container.dispatchEvent(startedLoad);

        const products = searchParam ? await getProductsByTitle(searchParam) : await getProductsLimit(currentPage);
        
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