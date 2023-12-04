import CartContext from "./cart-context";
import { useEffect, useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // add item
  if (action.type === "ADD") {
    let updatedTotalAmount;
    let updatedItems;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updatedTotalAmount = state.totalAmount + parseFloat(action.item.price);
    } else {
      updatedItems = state.items.concat(action.item);
      updatedTotalAmount =
        state.totalAmount +
        parseFloat(action.item.price) * action.item.quantity;
    }

    const cartStore = { items: updatedItems, totalAmount: updatedTotalAmount };
    localStorage.setItem(`cart-store`, JSON.stringify(cartStore));
    return cartStore;
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

    const cartStore = { items: updatedItems, totalAmount: updatedTotalAmount };
    localStorage.setItem(`cart-store`, JSON.stringify(cartStore));

    return cartStore;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartStore, setCartStore] = useState(
    JSON.parse(localStorage.getItem("cart-store")) &&
      JSON.parse(localStorage.getItem("cart-store")).items.length > 0
      ? {
          items: JSON.parse(localStorage.getItem("cart-store")).items,
          totalAmount: JSON.parse(localStorage.getItem("cart-store"))
            .totalAmount,
        }
      : defaultCartState
  );

  const [itemCounter, setItemCounter] = useState(0);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartStore);

  const addItemHandler = (items) => {
    items.forEach((item) => {
      cartDispatch({ type: "ADD", item: item });
    });
  };

  const removeItemHandler = (id, whole) => {
    cartDispatch({ type: "REMOVE", id: id, whole: whole });
  };

  useEffect(() => {
    let tempCounter = 0;

    cartState.items.forEach((item) => {
      tempCounter += item.quantity;
    });

    setItemCounter(tempCounter);
  }, [cartState.items]);

  const cartContext = {
    items: cartState.items,
    itemCounter: itemCounter,
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
