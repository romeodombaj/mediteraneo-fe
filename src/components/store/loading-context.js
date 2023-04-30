import React from "react";

const LoadingContext = React.createContext({
  mainLoaded: false,
  productLoaded: false,
  productIsLoading: false,
  params: 0,
  onMainLoaded: () => {},
  onProductLoaded: () => {},
  onProductLoad: () => {},
  setParams: (param) => {},
});

export default LoadingContext;
