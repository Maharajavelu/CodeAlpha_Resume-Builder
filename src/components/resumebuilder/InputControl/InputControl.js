import React from "react";

import './Input.css';

function InputControl({ label, ...props }) {
  return (
    <div className="container3">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
