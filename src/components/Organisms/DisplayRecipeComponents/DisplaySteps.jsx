import React from "react";

const DisplaySteps = ({ steps }) => {
  return (
    <div>
      <p className="text-2xl m-0">Steps for recipe:</p>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className="my-1 mx-4 list-decimal">
            {step.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplaySteps;
