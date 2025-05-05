export async function getPages(page) {
    const response = await fetch(`http://localhost:8000/api/products?_page=${page}`);

    if (!response.ok) {
        throw new Error("Unable to load pages");
    }

    const headerLinks = await response.headers.get("Link");

    return headerLinks;
}
