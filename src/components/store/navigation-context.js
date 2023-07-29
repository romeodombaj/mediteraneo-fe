import React from "react";

const NavigationContext = React.createContext({
  isNavigating: false,
  cartOpen: false,
  loadHomePage: () => {},
  loadCategory: () => {},
  changeNavigationState: () => {},
  closeCart: () => {},
  changeCartState: () => {},
  loadPage: () => {},
});

export default NavigationContext;
