import { toggleMenu } from "./components/hamburger-menu/hamburgerMenuController.js";
import { showProducts } from "./components/show-products/showProductsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => { toggleMenu(hamburger, navMenu) });

    const productsContainer = document.querySelector(".product-list");

    showProducts(productsContainer);

});
