export const pageElement = (number, limit) => {
    const element = `
        <li>
            <a class="btn-outline" href="/?_page=${number}&_limit=${limit}">${number}</a>
        </li>
    `;

    return element;
}