import { placeholderImage } from "../utils/const.js";
import { createProduct, uploadProductImage } from "./createProductModel.js";

export function addProduct(form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nameInput = form.querySelector("#name");
        const descriptionInput = form.querySelector("#desc");
        const priceInput = form.querySelector("#price");
        const imageInput = form.querySelector("#image");
        const typeInput = form.querySelector("input[name='ad-type']:checked");
        const name = nameInput.value;
        const description = descriptionInput.value;
        const price = parseFloat(priceInput.value).toFixed(2);
        const image = imageInput.files[0];
        const type = typeInput.value;
        const errors = [];

        if (errors.length === 0) {
            const startedAddProduct = new CustomEvent("add-product-started");
            form.dispatchEvent(startedAddProduct);
            handleCreateProduct(name, description, price, image, type, form);
        }  else {
            errors.forEach(error => {
                const failedAddProduct = new CustomEvent("add-product-failed", {
                    detail: error
                });
                form.dispatchEvent(failedAddProduct);
            });
        }
    });

    const handleCreateProduct = async (name, description, price, image, type, form) => {
        try {
            const imageUrl = image ? await uploadProductImage(image) : placeholderImage;

            await createProduct(name, description, price, imageUrl, type);

            const succeedAddProduct = new CustomEvent("add-product-succeed", {
                detail: {
                    message: "Your product has been successfully published!",
                    type: "success"
                }
            });
            form.dispatchEvent(succeedAddProduct);

            setTimeout(() => {
                window.location = "/";
            }, 3000);

        } catch (error) {
            const failedAddProduct = new CustomEvent("add-product-failed", {
                detail: error.message
            });
            form.dispatchEvent(failedAddProduct);
        } finally {
            const finishedAddProduct = new CustomEvent("add-product-finished");
            form.dispatchEvent(finishedAddProduct);
        }
    }
}