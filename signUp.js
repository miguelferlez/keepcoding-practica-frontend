import { signUp } from "./components/sign-up/signUpController.js";
import { showNotifications } from "./components/notifications/notificationsController.js";
import { toggleLoader } from "./components/loader/loaderController.js";


document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector("form");
    const notificationsContainer = document.querySelector(".notifications");
    const loaderContainer = document.querySelector(".loader-container");
    const { notify } = showNotifications(notificationsContainer);
    
    signUpForm.addEventListener("signup-failed", (event) => {
        const errorMessage = event.detail;
        notify(errorMessage);
    });
    signUpForm.addEventListener("signup-succeed", (event) => {
        const successMessage = event.detail.message;
        const messageType = event.detail.type;
        notify(successMessage, messageType); 
        toggleLoader(loaderContainer);
    });

    signUp(signUpForm);
});