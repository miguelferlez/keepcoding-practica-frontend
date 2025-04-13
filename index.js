import { toggleMenu } from "./components/hamburger-menu/hamburgerMenuController.js";

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => { toggleMenu(hamburger, navMenu) });

});
