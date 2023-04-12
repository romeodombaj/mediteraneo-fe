import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(action.item);
  if (action.type === "ADD") {
    const newItems = state.items.concat(action.item);
    const newTotalAmount = 0;

    //state.totalAmount + action.item.price * action.item.amount;

    console.log(newItems);
    console.log(newTotalAmount);
    return { items: newItems, totalAmount: newTotalAmount };
  }

  if (action.type === "REMOVE") {
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
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
