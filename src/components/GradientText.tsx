import React from "react";
import "./GradientText.css";

interface GradientTextProps {
  children: React.ReactNode;
  isDark: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  isDark,
}) => {
  return (
    <span className={isDark ? "gradient-text" : "plain-text"}>{children}</span>
  );
};
