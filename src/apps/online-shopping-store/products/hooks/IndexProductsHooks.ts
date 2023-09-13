import React from "react";
import { useSearchParams } from "react-router-dom";
import productList from "../../../../json/items.json";
import { useDebounce } from "../../../../utils/HelperUtils";
import { MyCart, Product, ReduxProps } from "../../../../utils/PropsUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  onOpenCartegory,
  onRefreshCount,
} from "../../../../components/navigation/actions/NavigationActions";

interface CategoryProps {
  category: string;
}

const IndexProductsHooks = () => {
  const dispatch = useDispatch<any>();
  const [myCart, setMyCart] = React.useState<MyCart[]>([]);
  const [categories, setCategories] = React.useState<CategoryProps[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [openCart, setopenCart] = React.useState(false);
  const isOpenCart = useSelector(
    (state: ReduxProps) => state.NavigationReducer.isOpenCart
  );
  const isOpenCategory = useSelector(
    (state: ReduxProps) => state.NavigationReducer.isOpenCategory
  );
  const refresh = useSelector(
    (state: ReduxProps) => state.NavigationReducer.refresh
  );

  const search =
    searchParams.get("search") != null ? searchParams.get("search") : "";
  const category: any =
    searchParams.get("category") != null
      ? String(searchParams.get("category"))
      : "";
  const debounceSearch = useDebounce(searchParams, 300);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearchParams({
      search: search,
      category: category,
    });
  };
  const localStorageOpenCArt = localStorage.getItem("openCart");

  React.useEffect(() => {
    const storedCart = localStorage.getItem("mycart");
    if (storedCart != null) {
      setMyCart(JSON.parse(storedCart));
    }
    onGetCategory();
  }, [debounceSearch]);
  const onGetCategory = () => {
    const categories: CategoryProps[] = [];
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index];
      const match = categories.filter(
        (val) => val.category === element.category
      );
      if (match.length === 0) {
        categories.push({ category: element.category });
      }
    }
    setCategories(categories);
    let filter: Product[] = [];

    filter = productList.filter((val) => {
      return (
        val.productName.toLowerCase().indexOf(String(search)?.toLowerCase()) !==
        -1
      );
    });
    filter = filter.filter((val) => {
      return (
        val.category.toLowerCase().indexOf(String(category)?.toLowerCase()) !==
        -1
      );
    });

    setProducts(filter);
  };

  const onSelectCategory = (selectedcategory: string) => {
    const searchValue: any =
      searchParams.get("search") != null ? searchParams.get("search") : "";

    setSearchParams({
      search: searchValue,
      category: selectedcategory,
    });
    //close category option
    dispatch(
      onOpenCartegory({
        isOpenCart: false,
        isOpenCategory: false,
      })
    );
  };
  const onAddCart = (product: Product) => {
    let newMyCart = [...myCart];
    let findIndex = myCart.findIndex((val) => val.id === product.id);

    if (findIndex === -1) {
      newMyCart.unshift({
        ...product,
        quantity: 1,
        total: product.unitPrice * 1,
      });
    } else {
      newMyCart[findIndex].quantity += 1;
      newMyCart[findIndex].total =
        newMyCart[findIndex].quantity * newMyCart[findIndex].unitPrice;

      const elementToMove = newMyCart.splice(findIndex, 1)[0]; // Remove the element at index 2
      newMyCart.unshift(elementToMove);
    }

    localStorage.setItem("mycart", JSON.stringify(newMyCart));
    setMyCart(newMyCart);
    //refresh mycart count
    dispatch(
      onRefreshCount({
        refresh: !refresh,
      })
    );
  };

  const onAdd = (product: MyCart) => {
    let newMyCart = [...myCart];
    let findIndex = myCart.findIndex((val) => val.id === product.id);
    // check if the item is existing in the cart
    if (findIndex === -1) {
      newMyCart.push({ ...product, quantity: 1, total: product.unitPrice * 1 });
    } else {
      newMyCart[findIndex].quantity += 1;
      newMyCart[findIndex].total =
        newMyCart[findIndex].quantity * newMyCart[findIndex].unitPrice;
    }
    //save to localStorage
    localStorage.setItem("mycart", JSON.stringify(newMyCart));
    setMyCart(newMyCart);
  };
  const onDeduct = (product: MyCart) => {
    let newMyCart = [...myCart];
    let findIndex = myCart.findIndex((val) => val.id === product.id);
    // deduct the quantity and re compute the total amout
    if (findIndex !== -1 && newMyCart[findIndex].quantity > 1) {
      newMyCart[findIndex].quantity -= 1;
      newMyCart[findIndex].total =
        newMyCart[findIndex].quantity * newMyCart[findIndex].unitPrice;
    }
    localStorage.setItem("mycart", JSON.stringify(newMyCart));
    setMyCart(newMyCart);
  };

  const onRemoveItem = (product: MyCart) => {
    let newMyCart = [...myCart];
    let findIndex = myCart.findIndex((val) => val.id === product.id);
    // remove the match item using index
    if (findIndex > -1) {
      newMyCart.splice(findIndex, 1);
    }

    localStorage.setItem("mycart", JSON.stringify(newMyCart));
    setMyCart(newMyCart);
    //refresh mycart count
    dispatch(
      onRefreshCount({
        refresh: !refresh,
      })
    );
  };
  const onClear = () => {
    setMyCart([]);
    localStorage.clear();
    //refresh count
    dispatch(
      onRefreshCount({
        refresh: !refresh,
      })
    );
  };

  const onCheckout = () => {
    setOpenModal(true);
    localStorage.clear();
    setMyCart([]);
    //refresh count
    dispatch(
      onRefreshCount({
        refresh: !refresh,
      })
    );
  };
  const onClose = () => {
    setOpenModal(false);
  };
  const onCloseCart = () => {
    setopenCart(false);
  };
  const onOpenCart = () => {
    setopenCart(true);
  };
  const onSortLow = () => {
    // sort the array by price in ascending order
    let newProduct = products.map((val) => val);
    newProduct.sort((a, b) => a.unitPrice - b.unitPrice);

    setProducts(newProduct);
  };
  const onSortHigh = () => {
    // sort the array by price in desending order
    let newProduct = products.map((val) => val);
    newProduct.sort((a, b) => b.unitPrice - a.unitPrice);

    setProducts(newProduct);
  };

  return {
    products,
    onAddCart,
    myCart,
    onDeduct,
    onAdd,
    onRemoveItem,
    onClear,
    categories,
    onChangeSearch,
    onSelectCategory,
    category,
    onCheckout,
    onClose,
    openModal,
    openCart,
    onCloseCart,
    onOpenCart,
    search,
    onSortLow,
    onSortHigh,
    isOpenCart,
    isOpenCategory,
  };
};

export default IndexProductsHooks;
