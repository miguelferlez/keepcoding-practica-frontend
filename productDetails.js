import { toggleMenu } from "./components/hamburger-menu/hamburgerMenuController.js";
import { toggleLoader } from "./components/loader/loaderController.js";
import { showProductDetails } from "./components/product-details/productDetailsController.js";
import { showNotifications } from "./components/notifications/notificationsController.js";
import { handleSession } from "./components/session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const loaderContainer = document.querySelector(".loader-container");
    const notificationsContainer = document.querySelector(".notifications");
    const productContainer = document.querySelector(".product-container");
    const { notify } = showNotifications(notificationsContainer);
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");

    hamburger.addEventListener("click", () => { toggleMenu(hamburger, navMenu) });

    handleSession(navMenu);
    
    if (productId) {
        productContainer.addEventListener("load-details-started", () => {
            toggleLoader(loaderContainer);
        });
        productContainer.addEventListener("load-details-finished", () => {
            toggleLoader(loaderContainer);
        });
        productContainer.addEventListener("load-details-failed", (event) => {
            const errorMessage = event.detail;
            notify(errorMessage);
        });

        showProductDetails(productContainer, productId);

        productContainer.addEventListener("remove-product-succeed", (event) => {
            const successMessage = event.detail.message;
            const messageType = event.detail.type;
            localStorage.setItem("removeProductNotification", JSON.stringify({
                message: successMessage, 
                type: messageType
            }));
            toggleLoader(loaderContainer);
        });
    } else {
        window.location = "/";
    }

});