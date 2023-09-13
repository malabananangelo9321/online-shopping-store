import React from "react";
interface RightMenuProps {
  onClear: () => void;
}
const RightMenu = (props: RightMenuProps) => {
  return (
    <div className="my-cart">
      <div className="my-cart-title-container">
        <p>My Cart</p>
        <div className="my-cart-button">
          <button className="clear-button" onClick={props.onClear}>
            Clear Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
