import React from "react";
import Card from "../../../../components/card/Card";
import CardItem from "../../../../components/card/CardItem";
import InputSearch from "../../../../components/input/InputSearch";
import ListItem from "../../../../components/list/ListItem";
import Modal from "../../../../components/modal/Modal";
import RightMenu from "../../../../components/navigation/RightMenu";
import IndexProductsHooks from "../hooks/IndexProductsHooks";
import MyCartList from "./MyCartList";
import TotalItemCheckout from "./TotalItemCheckout";

const IndexProducts = () => {
  const { products, onAddCart, myCart, ...param } = IndexProductsHooks();
  return (
    <>
      <div className="flex-container">
        <div className={param.isOpenCategory ? "left-menu-new" : "left-menu"}>
          <Card>
            <ListItem
              categories={param.categories}
              onSelectCategory={param.onSelectCategory}
              category={param.category}
            />
          </Card>
        </div>
        <div className="middle-container ">
          <div className="cart-menu-right" onClick={param.onOpenCart}></div>
          <div className="main-container">
            <InputSearch
              placeholder="Search Item"
              onChangeSearch={param.onChangeSearch}
              search={param.search}
            />
            <div className="class-sort-container ">
              <span>Sort Price :</span>
              <button onClick={param.onSortHigh} className="sortButton">
                <i>High</i>{" "}
              </button>
              <button onClick={param.onSortLow} className="sortButton">
                <i>Low</i>{" "}
              </button>
            </div>
            <CardItem
              products={products}
              onAddCart={onAddCart}
              myCart={myCart}
            />
          </div>
        </div>
        <div className={param.isOpenCart ? "right-menu-new" : "right-menu"}>
          <RightMenu onClear={param.onClear} />
          <MyCartList
            myCart={myCart}
            onDeduct={param.onDeduct}
            onAdd={param.onAdd}
            onRemoveItem={param.onRemoveItem}
          />
          <TotalItemCheckout myCart={myCart} onCheckout={param.onCheckout} />
        </div>

        <Modal openModal={param.openModal} onClose={param.onClose}>
          <p>Thank you for purchasing.</p>
        </Modal>
      </div>
    </>
  );
};

export default IndexProducts;
