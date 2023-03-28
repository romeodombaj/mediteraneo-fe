import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  price: 0,
});

export default CartContext;
