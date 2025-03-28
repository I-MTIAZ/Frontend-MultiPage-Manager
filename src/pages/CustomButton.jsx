import { useState, useEffect } from "react";
import blackIcon from "../img/black.png"; // Import blackicon image
import whiteIcon from "../img/white.png"; // Import whiteicon image

export default function CustomButton({ isChecked, onClick }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isChecked) {
      // Step-by-step activation animation
      for (let i = 1; i <= 3; i++) {
        setTimeout(() => setStep(i), i * 100);
      }
      setTimeout(() => setStep(3), 500);
    } else {
      // Step-by-step deactivation animation
      for (let i = 3; i >= 1; i--) {
        setTimeout(() => setStep(i - 1), (4 - i) * 100);
      }
      setTimeout(() => setStep(0), 500);
    }
  }, [isChecked]);

  return (
    <div className="checkbox-container">
      <div
        id="checkbox"
        className={`custom-checkbox step-${step} ${isChecked ? "checked" : ""}`}
        onClick={onClick} // Clicking updates the state in Home.js
      >
        {/* Black image for hover */}
        <img src={blackIcon} alt="black checkbox" className="black-icon" />

        {/* White image for checked state */}
        <img src={whiteIcon} alt="white checkbox" className="white-icon" />
      </div>
    </div>
  );
}
