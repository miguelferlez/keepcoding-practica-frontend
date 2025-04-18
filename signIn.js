import { signIn } from "./components/sign-in/signInController.js";
import { showNotifications } from "./components/notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("form");
    const notificationsContainer = document.querySelector(".notifications");
    const { notify } = showNotifications(notificationsContainer);

    signInForm.addEventListener("signin-failed", (event) => {
        const errorMessage = event.detail;
        notify(errorMessage);
    })

    signIn(signInForm);
})