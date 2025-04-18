import { emailRegExp } from "../utils/const.js";
import { createUser } from "./signUpModel.js";

export function signUp(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const passwordInput = form.querySelector("#password");
        const passwordConfirmInput = form.querySelector("#password-confirm");
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const passwordConfirm = passwordConfirmInput.value;
        const errors = [];

        if (!emailRegExp.test(email)) {
            errors.push("Email format is not correct.");
        }

        if (password !== passwordConfirm) {
            errors.push("Password values do not match.");
        }

        if (errors.length === 0) {
            const startedSignUp = new CustomEvent("signup-started");
            form.dispatchEvent(startedSignUp);
            
            handleCreateUser(name, email, password, form);
        } else {
            errors.forEach(error => {
                const failedSignUp = new CustomEvent("signup-failed", {
                    detail: error
                });
                form.dispatchEvent(failedSignUp);
            });
        }

    });

    const handleCreateUser = async (name, email, password, form) => {
        try {
            await createUser(name, email, password);

            const succeedSignUp = new CustomEvent("signup-succeed", {
                detail: {
                    message: "Your account has been successfully created!",
                    type: "success"
                }
            });
            form.dispatchEvent(succeedSignUp);

            setTimeout(() => {
                window.location = "/";
            }, 3000);
        } catch (error) {
            const failedSignUp = new CustomEvent("signup-failed", {
                detail: error.message
            });
            form.dispatchEvent(failedSignUp);
        } finally {
            const finishedSignUp = new CustomEvent("signup-finished");
            form.dispatchEvent(finishedSignUp);
        }
    }
}