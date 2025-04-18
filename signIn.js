import { signIn } from "./components/sign-in/signInController.js";
import { toggleLoader } from "./components/loader/loaderController.js";
import { showNotifications } from "./components/notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("form");
    const loaderContainer = document.querySelector(".loader-container");
    const notificationsContainer = document.querySelector(".notifications");
    const { notify } = showNotifications(notificationsContainer);

    signInForm.addEventListener("signin-started", () => {
        toggleLoader(loaderContainer);
    });
    signInForm.addEventListener("signin-failed", (event) => {
        const errorMessage = event.detail;
        notify(errorMessage);
    });
    signInForm.addEventListener("signin-succeed", () => {
        toggleLoader(loaderContainer);
    });
    signInForm.addEventListener("signin-finished", () => {
        toggleLoader(loaderContainer);
    });

    signIn(signInForm);
})