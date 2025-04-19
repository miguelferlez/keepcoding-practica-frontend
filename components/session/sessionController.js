import { authorizedNavMenu, unauthorizedNavMenu } from "./sessionNavView.js";
import { authorizedHeading, authorizedHeadingWithName, unauthorizedHeading } from "./sessionHeadingView.js";
import { getLoggedInUser } from "./sessionUser.js";

export const handleSession = async (container, header) => {
    const isUserLoggedIn = Boolean(localStorage.getItem("token"));
    
    if (isUserLoggedIn) {
        try {
            const user = await getLoggedInUser();
    
            container.innerHTML = authorizedNavMenu();
            header.innerHTML = user.nickname ? authorizedHeadingWithName(user) : authorizedHeading();
    
            const signOutBtn = container.querySelector("button");
            signOutBtn.addEventListener("click", () => {
                localStorage.removeItem("token");
                handleSession(container);
                window.location = "/";
            });
        } catch (error) {
            const failedGetUser = new CustomEvent("get-user-failed", {
                detail: error.message
            });
            container.dispatchEvent(failedGetUser);
        }
    } else {
        container.innerHTML = unauthorizedNavMenu();
        header.innerHTML = unauthorizedHeading();
    }
};