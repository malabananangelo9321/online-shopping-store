import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faList } from "@fortawesome/free-solid-svg-icons";
import { onOpenMyCart, onOpenCartegory } from "./actions/NavigationActions";
import { useDispatch, useSelector } from "react-redux";
import { MyCart, ReduxProps } from "../../utils/PropsUtils";
const Navigation = () => {
  const dispatch = useDispatch<any>();
  // const mycart = localStorage.getItem("mycart");
  const [mycart, setMyCart] = React.useState<MyCart[]>([]);

  const isOpenCart = useSelector(
    (state: ReduxProps) => state.NavigationReducer.isOpenCart
  );
  const refresh = useSelector(
    (state: ReduxProps) => state.NavigationReducer.refresh
  );
  const isOpenCategory = useSelector(
    (state: ReduxProps) => state.NavigationReducer.isOpenCategory
  );
  React.useEffect(() => {
    const storageCart = localStorage.getItem("mycart");
    if (storageCart != null) {
      setMyCart(JSON.parse(storageCart));
    }
  }, [refresh]);
  const onOpenCart = () => {
    dispatch(
      onOpenMyCart({
        isOpenCart: !isOpenCart,
        isOpenCategory: false,
      })
    );
  };
  const openCategory = () => {
    dispatch(
      onOpenCartegory({
        isOpenCart: false,
        isOpenCategory: !isOpenCategory,
      })
    );
  };
  return (
    <div>
      <div className="navigation-style">
        <div className="cart-category" onClick={openCategory}>
          <FontAwesomeIcon
            icon={faList}
            style={{ color: "#fff", fontSize: 15 }}
          />
        </div>
        <p className="navigation-tile">Online Shopping Store</p>

        <div className="cart-menu" onClick={onOpenCart}>
          <div className="cart-count">
            <p>{mycart != null ? mycart.length : 0}</p>
          </div>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#fff", fontSize: 15 }}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
