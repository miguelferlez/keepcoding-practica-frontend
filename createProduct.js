import { addProduct } from "./components/create-product/createProductController.js";
import { toggleLoader } from "./components/loader/loaderController.js"
import { showNotifications } from "./components/notifications/notificationsController.js"

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    const addProductForm = document.querySelector("form");
    const loaderContainer = document.querySelector(".loader-container");
    const notificationsContainer = document.querySelector(".notifications");
    const { notify } = showNotifications(notificationsContainer);

    if (!token) {
        window.location = "/sign-in.html";
    }

    addProductForm.addEventListener("add-product-started", () => {
        toggleLoader(loaderContainer);
    });
    addProductForm.addEventListener("add-product-failed", (event) => {
        const errorMessage = event.detail;
        notify(errorMessage);
    });
    addProductForm.addEventListener("add-product-succeed", (event) => {
        const successMessage = event.detail.message;
        const messageType = event.detail.type;
        localStorage.setItem("addProductNotification", JSON.stringify({
            message: successMessage, 
            type: messageType
        }));
        toggleLoader(loaderContainer); 
    });
    addProductForm.addEventListener("add-product-finished", () => {
        toggleLoader(loaderContainer);
    });

    addProduct(addProductForm);
});