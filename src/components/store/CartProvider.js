import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // add item
  if (action.type === "ADD") {
    let updatedTotalAmount;
    let updatedItems;

    updatedTotalAmount = state.totalAmount + parseFloat(action.item.price);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    localStorage.setItem(`cart-store`, JSON.stringify(updatedItems));
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // remove item
  if (action.type === "REMOVE") {
    let updatedItems;
    let updatedTotalAmount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    updatedTotalAmount = state.totalAmount - existingCartItem.price;

    if (existingCartItem.quantity > 1 && action.whole === false) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    localStorage.setItem(`cart-store`, JSON.stringify(updatedItems));
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartStore, setCartStore] = useState(
    JSON.parse(localStorage.getItem("cart-store")) &&
      JSON.parse(localStorage.getItem("cart-store")).length > 0
      ? {
          items: JSON.parse(localStorage.getItem("cart-store")),
          totalAmount: 0,
        }
      : defaultCartState
  );

  const [cartState, cartDispatch] = useReducer(cartReducer, cartStore);

  const addItemHandler = (items) => {
    items.forEach((item) => {
      cartDispatch({ type: "ADD", item: item });
    });
  };

  const removeItemHandler = (id, whole) => {
    cartDispatch({ type: "REMOVE", id: id, whole: whole });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
