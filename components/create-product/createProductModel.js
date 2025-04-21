export const uploadProductImage = async (image) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", image);
    
    const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error("Unable to create product, please try later again!");
    }

    return data.path
}

export const createProduct = async (title, description, price, image, type) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
            price,
            image,
            type
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        // const data = await response.json();
        throw new Error("Unable to create product, please try later again!");
    }
}