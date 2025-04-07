import { menuController} from './controllers/menuController.js';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const { toggleMenu } = menuController(hamburger, navMenu);
    hamburger.addEventListener('click', toggleMenu);

});
