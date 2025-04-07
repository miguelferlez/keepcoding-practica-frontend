export function menuController(button, menu) {
    const toggleMenu = () => {
        button.classList.toggle('active');
        menu.classList.toggle('active');
    }

    return { toggleMenu }
}