import React from "react";

const NavigationContext = React.createContext({
  isNavigating: false,
  loadHomePage: () => {},
  loadCategory: () => {},
  changeNavigationState: () => {},
  loadPage: () => {},
});

export default NavigationContext;
