import React from "react";
import { IncrementButtonProps } from "../../utils/PropsUtils";

const IncrementButton = (props: IncrementButtonProps) => {
  return (
    <div className="increment-container">
      <button onClick={props.onDeduct}>-</button>
      <input className="increment-input" readOnly value={props.quantity} />
      <button onClick={props.onAdd}>+</button>
    </div>
  );
};

export default IncrementButton;
