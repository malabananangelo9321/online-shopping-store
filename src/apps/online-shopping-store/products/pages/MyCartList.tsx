import React from "react";
import Card from "../../../../components/card/Card";
import IncrementButton from "../../../../components/increment/IncrementButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
interface MyCartListProps {
  myCart: ProductList[];
  onDeduct: (product: ProductList) => void;
  onAdd: (product: ProductList) => void;
  onRemoveItem: (product: ProductList) => void;
}
const MyCartList = (props: MyCartListProps) => {
  return (
    <div className="my-cart-contain">
      {/* <Card> */}
      {props.myCart.map((val) => {
        return (
          <div className="my-cart-list" key={val.id}>
            <div className="clear-icon" onClick={() => props.onRemoveItem(val)}>
              {" "}
              <FontAwesomeIcon
                icon={faClose}
                style={{ color: "#fff", fontSize: 15 }}
              />
            </div>

            <div className="my-cart-container">
              <div className="my-cart-image">
                <img className="my-cart-image-style" src={val.imageUrl} />
              </div>
              <div className="my-cart-name">
                <p>{val.productName}</p>
                <p className="my-cart-list-price">{`₱${val.total.toLocaleString()}`}</p>
              </div>
              <div className="my-cart-button-display">
                <IncrementButton
                  quantity={val.quantity}
                  onDeduct={() => props.onDeduct(val)}
                  onAdd={() => props.onAdd(val)}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* </Card> */}
    </div>
  );
};

export default MyCartList;
