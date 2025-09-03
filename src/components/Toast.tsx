import React, { useState, useEffect } from "react";
import "./Toast.css";

export const Toast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the toast after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide the toast after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      Follow us for the latest updates! ✨
    </div>
  );
};
