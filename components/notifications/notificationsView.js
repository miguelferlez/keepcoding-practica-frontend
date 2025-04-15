export const notificationElement = (message) => {
    const element = `
        <span>${message}</span>
        <button>
            <span class="material-symbols-outlined">close</span>
        </button>
    `;

    return element;
}