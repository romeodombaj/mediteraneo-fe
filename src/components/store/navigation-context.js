import React from "react";

const NavigationContext = React.createContext({
  isNavigating: false,
  cartOpen: false,
  savedOpen: false,
  loadHomePage: () => {},
  loadCategory: () => {},
  changeNavigationState: () => {},
  closeCart: () => {},
  changeSavedState: () => {},
  closeSaved: () => {},
  changeCartState: () => {},
  loadPage: () => {},
  goToTop: () => {},
});

export default NavigationContext;
