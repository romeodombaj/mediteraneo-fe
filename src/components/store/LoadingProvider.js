import LoadingContext from "./loading-context";
import { useState } from "react";

const LoadingProvider = (props) => {
  const [mainLoaded, setMainLoaded] = useState(false);
  const [productLoaded, setProductLoaded] = useState(false);
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [params, setParams] = useState();

  const onMainLoaded = () => {
    setMainLoaded(true);
  };

  const onProductLoaded = () => {
    setProductLoaded(true);
    setProductIsLoading(false);
  };

  const onProductLoad = () => {
    setProductIsLoading(true);
    setProductLoaded(false);
  };

  const setParam = (param) => {
    setParams(param);
  };

  const loadingContext = {
    mainLoaded: mainLoaded,
    productLoaded: productLoaded,
    productIsLoading: productIsLoading,
    params: params,
    onMainLoaded: onMainLoaded,
    onProductLoaded: onProductLoaded,
    onProductLoad: onProductLoad,
    setParams: setParam,
  };

  return (
    <LoadingContext.Provider value={loadingContext}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
