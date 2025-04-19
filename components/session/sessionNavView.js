export const authorizedNavMenu = () => {
    const navMenu = `
        <li class="nav-item">
            <a class="btn" href="./create-product.html">Add new product</a>
        </li>
        <li class="nav-item">
            <button class="btn-outline">Sign Out</button>
        </li>
    `;

    return navMenu
};

export const unauthorizedNavMenu = () => {
    const navMenu = `
        <li class="nav-item">
            <a class="btn-outline" href="./sign-up.html">Sign Up</a>
        </li>
        <li class="nav-item">
            <a class="btn-outline" href="./sign-in.html">Sign In</a>
        </li>
    `;

    return navMenu;
};