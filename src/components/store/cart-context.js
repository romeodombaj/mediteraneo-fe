import React from "react";

const CartContext = React.createContext({
  items: [],
  itemCounter: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id, whole) => {},
});

export default CartContext;
