import { loginUser } from "./signInModel.js";
import { emailRegExp } from "../utils/const.js";

export function signIn(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = form.querySelector("#email");
        const passwordInput = form.querySelector("#password");
        const email = emailInput.value;
        const password = passwordInput.value;
        const errors = [];

        if (!emailRegExp.test(email)) {
            errors.push("Email format is not correct.");
        }

        if (errors.length === 0) {
            handleLoginUser(email, password);
        } else {
            errors.forEach(error => {
                const failedSignIn = new CustomEvent("signin-failed", {
                    detail: error
                });
                form.dispatchEvent(failedSignIn);
            })
        }
    });

    async function handleLoginUser(email, password) {
        try {
            const token = await loginUser(email, password);

            const succeedSignIn = new CustomEvent("signin-succeed");
            form.dispatchEvent(succeedSignIn);

            setTimeout(() => {
                window.location = "/";
            }, 3000);
    
            localStorage.setItem("token", token);
        } catch (error) {
            const failedSignIn = new CustomEvent("signin-failed", {
                detail: error.message
            });
            form.dispatchEvent(failedSignIn);
        }
    }
}