import { toggleMenu } from "./components/hamburger-menu/hamburgerMenuController.js";
import { toggleLoader } from "./components/loader/loaderController.js";
import { showProducts } from "./components/show-products/showProductsController.js";
import { showNotifications } from "./components/notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const productsContainer = document.querySelector(".product-list");
    const loaderContainer = document.querySelector(".loader-container");
    const notificationsContainer = document.querySelector(".notifications");
    const { notify } = showNotifications(notificationsContainer);
    const signUpNotification = JSON.parse(localStorage.getItem("signUpNotification"));

    hamburger.addEventListener("click", () => { toggleMenu(hamburger, navMenu) });
    productsContainer.addEventListener("load-products-started", () => {
        toggleLoader(loaderContainer);
    });
    productsContainer.addEventListener("load-products-finished", () => {
        toggleLoader(loaderContainer);
    });
    productsContainer.addEventListener("load-products-failed", (event) => {
        const errorMessage = event.detail;
        notify(errorMessage);
    });

    if (signUpNotification) {
        notify(signUpNotification.message, signUpNotification.type);
        localStorage.removeItem("signUpNotification");
    }
    showProducts(productsContainer);

});
