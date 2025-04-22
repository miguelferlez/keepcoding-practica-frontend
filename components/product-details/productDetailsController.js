import { getLoggedInUser } from "../session/sessionUser.js";
import { placeholderNotFoundImage } from "../utils/const.js";
import { getProductDetails, removeProduct, verifyProductImage } from "./productDetailsModel.js";
import { productDetailsElement, removeButtonElement } from "./productDetailsView.js";

export const showProductDetails = async (container, productId) => {
    const showRemoveButton = (productId) => {
        const removeButton = removeButtonElement();
        container.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this product?")) {
                removeProduct(productId);
                
                const succeedRemoveProduct = new CustomEvent("remove-product-succeed", {
                    detail: {
                        message: "Your product has been successfully removed!",
                        type: "success"
                    }
                });

                container.dispatchEvent(succeedRemoveProduct);

                setTimeout(() => {
                    window.location = "/";
                }, 3000);
            }
        });
    }
    
    try {
        const startedLoad = new CustomEvent("load-details-started");
        container.dispatchEvent(startedLoad);

        const productDetails = await getProductDetails(productId);

        if (productDetails.image) {
            productDetails.image = await verifyProductImage(productDetails.image, placeholderNotFoundImage)
        }

        container.innerHTML = productDetailsElement(productDetails);

        const token = localStorage.getItem("token");
        if (token) {
            const user = await getLoggedInUser();
    
            if (user.id === productDetails.userId) {
                showRemoveButton(productId);
            }
        }

    } catch (error) {
        const failedLoad = new CustomEvent("load-details-failed", {
            detail: error.message
        });
        container.dispatchEvent(failedLoad);
    } finally {
        const finishedLoad = new CustomEvent("load-details-finished");
        container.dispatchEvent(finishedLoad);
    }
};