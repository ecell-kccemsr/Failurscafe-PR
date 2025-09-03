import React, { useState, useEffect } from "react";
import facts from "../facts.json";
import "./FunFactCard.css";

const FACT_CHANGE_INTERVAL = 3000;

export const FunFactCard: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % facts.length);
    }, FACT_CHANGE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const nextFact = () => setIndex((i) => (i + 1) % facts.length);

  return (
    <div className="fun-fact-card">
      <h3 className="card-title">
        <span className="highlight">FunFacts</span> OP
      </h3>
      <div className="fact-text">{facts[index]}</div>
      <button
        className="next-fact-btn"
        onClick={nextFact}
        aria-label="Next Fact"
        tabIndex={0}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="8,5 20,12 8,19" fill="#ff6a00" />
        </svg>
      </button>
    </div>
  );
};
