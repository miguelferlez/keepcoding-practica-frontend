import { toggleMenu } from "./components/hamburger-menu/hamburgerMenuController.js";
import { toggleLoader } from "./components/loader/loaderController.js";
import { showProducts } from "./components/show-products/showProductsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const productsContainer = document.querySelector(".product-list");
    const loaderContainer = document.querySelector(".loader-container");

    hamburger.addEventListener("click", () => { toggleMenu(hamburger, navMenu) });
    productsContainer.addEventListener("load-products-started", () => {
        toggleLoader(loaderContainer);
    });
    productsContainer.addEventListener("load-products-finished", () => {
        toggleLoader(loaderContainer);
    });

    showProducts(productsContainer);

});
