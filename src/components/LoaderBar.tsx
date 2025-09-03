import React from "react";
import "./LoaderBar.css";

interface LoaderBarProps {
  value: number; // 0 to 100
}

export const LoaderBar: React.FC<LoaderBarProps> = ({ value }) => {
  return (
    <div className="loader-bar-container">
      <div className="loader-bar-bg">
        <div className="loader-bar-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="loader-bar-label">{value}%</span>
    </div>
  );
};
