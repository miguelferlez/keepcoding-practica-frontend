export async function getLoggedInUser() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8000/auth/me", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Unable to get user info");
    }

    const user = await response.json();

    return user;
}