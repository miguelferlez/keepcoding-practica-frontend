export async function getProductDetails(productId) {
    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);

    if (!response.ok) {
        throw new Error("Unable to get product");
    }

    const productDetails = await response.json();

    return productDetails;
}

export async function removeProduct(productId) {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
    }
}