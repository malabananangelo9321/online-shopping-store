import React from "react";
interface ProductList {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
  quantity: number;
  total: number;
}
interface TotalItemCheckoutProps {
  myCart: ProductList[];
  onCheckout: () => void;
}
const TotalItemCheckout = (props: TotalItemCheckoutProps) => {
  return (
    <div className="checkout-container">
      <div className="checkout-outlined">
        <div className="checkout-total-item ">
          <span className="checkout-item-test">Total Item</span>
          <span className="checkout-item-test-price">
            {props.myCart.reduce((count, val) => (count += val.quantity), 0)}
          </span>
        </div>
        <div className="checkout-total-item">
          <span className="checkout-item-test">Total Amount</span>
          <span className="checkout-item-price-total ">{`₱${props.myCart
            .reduce((count, val) => (count += val.total), 0)
            .toLocaleString()}`}</span>
        </div>
        <div className="checkout-total-item">
          <button onClick={props.onCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TotalItemCheckout;
