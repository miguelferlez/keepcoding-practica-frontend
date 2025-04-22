export async function getProducts() {
    try {
        const response = await fetch("http://localhost:8000/api/products");
        const products = await response.json();

        return products;
    } catch (error) {
        throw new Error("Unable to load products, please try later again!");
    }
}

export async function verifyProductImage(image, placeholder) {
    try {
        const response = await fetch(image, {
            method: "HEAD"
        });

        if (!response.ok) {
            throw new Error("Image not found")
        }

        return image;
    } catch (error) {
        return placeholder;
    }
}