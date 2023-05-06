import NavigationContext from "./navigation-context";
import { useContext, useState } from "react";
import LoadingContext from "./loading-context";
import { useNavigate } from "react-router-dom";

const NavigationProvider = (props) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const loadCtx = useContext(LoadingContext);
  const navigate = useNavigate();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const loadPage = (catID = "") => {
    if (loadCtx.params !== catID) {
      loadCtx.setParams(catID);

      if (catID !== "") {
        loadCtx.onProductLoad();
      }

      setTimeout(() => {
        navigate(`/${catID}`);
        goToTop();
        setIsNavigating(false);
      }, 250);
    } else {
      goToTop();
      setIsNavigating(false);
    }
  };

  const loadCategory = (catID) => {
    loadPage(catID);
  };

  const loadHomePage = () => {
    loadPage();
  };

  const changeNavigationState = () => {
    setIsNavigating((prevState) => !prevState);
  };

  const navigationContext = {
    loadCategory: loadCategory,
    loadPage: loadPage,
    isNavigating: isNavigating,
    loadHomePage: loadHomePage,
    changeNavigationState: changeNavigationState,
  };

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
