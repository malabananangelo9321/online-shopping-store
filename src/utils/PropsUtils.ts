interface NavigationProps {
  isOpenCart: boolean;
  isOpenCategory: boolean;
  refresh: boolean;
}
export interface ReduxProps {
  NavigationReducer: NavigationProps;
}
export interface ModalProps {
  openModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
interface CategoryProps {
  category: string;
}
export interface ListItemProps {
  categories: CategoryProps[];
  category: string;
  onSelectCategory: (category: string) => void;
}
export interface InputSearchProps {
  placeholder: string;
  search: any;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IncrementButtonProps {
  quantity: number;
  onDeduct: () => void;
  onAdd: () => void;
}
export interface Product {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
}
export interface MyCart {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
  quantity: number;
  total: number;
}
export interface CardItemProps {
  products: Product[];
  onAddCart: (product: Product) => void;
  myCart: MyCart[];
}

export interface CardProps {
  children: React.ReactNode;
}
