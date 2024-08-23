/**
 * Toast component is used to show a message for
 * a short period of time.
 *
 * @returns Toast component
 */
import React from "react";
import "../styles/Toast.css";

function Toast({ message, onClose }) {
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return message && <div className="toast">{message}</div>;
}

export default Toast;
