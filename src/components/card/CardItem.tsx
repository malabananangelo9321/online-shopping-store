import React from "react";
import { CardItemProps } from "../../utils/PropsUtils";

const renderEqualProps = (
  prevProps: CardItemProps,
  nextProps: CardItemProps
) => {
  return (
    prevProps.products === nextProps.products &&
    prevProps.myCart === nextProps.myCart
  );
};
const CardItem = (props: CardItemProps) => {
  return (
    <>
      {props.products.map((val) => {
        return (
          <div className="card-container-item" key={val.id}>
            <div className="card-item ">
              <div className="image-container">
                <img src={val.imageUrl} className="image-style-item" />
              </div>
              <div className="item-container">
                <p className="item-title">{val.productName}</p>
                <p className="item-text">{val.category}</p>
                <p className="item-description">{val.description}</p>
              </div>
              <div className="button-container">
                <span className="item-price">{`₱${val.unitPrice.toLocaleString()}`}</span>
                <button
                  onClick={() => props.onAddCart(val)}
                  className="item-button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(CardItem, renderEqualProps);
