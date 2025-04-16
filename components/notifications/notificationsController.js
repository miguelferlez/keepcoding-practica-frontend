import { notificationElement } from "./notificationsView.js";

export function showNotifications(container) {
    const remove = (notification) => {
        notification.remove();
    };

    const fadeOut = (duration, notification) => {
        notification.classList.add("fade-out");
        setTimeout(() => {
            remove(notification);
        }, duration);

    }
    
    const notify = (message, type = "error") => {
        const notification = document.createElement("div");
        notification.classList.add("notification");
        notification.classList.add(type);
        notification.innerHTML = notificationElement(message);
        container.appendChild(notification);
        
        const closeButton = notification.querySelector("button");
        closeButton.addEventListener("click", () => {
            remove(notification);
        });
        
        setTimeout(() => {
            fadeOut(1000, notification);
        }, 5000);
    };

    return { notify }
} 