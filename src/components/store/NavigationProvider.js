import NavigationContext from "./navigation-context";
import { useContext, useState } from "react";
import LoadingContext from "./loading-context";
import { useNavigate } from "react-router-dom";
import CategoryContext from "./category-context";

const NavigationProvider = (props) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const loadCtx = useContext(LoadingContext);
  const navigate = useNavigate();
  const categoryCtx = useContext(CategoryContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const loadPage = (catID = "") => {
    if (loadCtx.params !== catID) {
      let slug = "";
      if (catID !== "") {
        slug =
          categoryCtx.categories[
            categoryCtx.categories.findIndex((category) => category.id == catID)
          ].slug;
      }

      loadCtx.setParams(slug);

      if (catID !== "") {
        loadCtx.onProductLoad();
      }

      setTimeout(() => {
        navigate(`/${slug}`);
        goToTop();
        setIsNavigating(false);
        closeCart();
      }, 250);
    } else {
      goToTop();
      setIsNavigating(false);
      closeCart();
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

  const changeCartState = () => {
    setCartOpen((prevState) => !prevState);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const navigationContext = {
    loadCategory: loadCategory,
    loadPage: loadPage,
    isNavigating: isNavigating,
    cartOpen: cartOpen,
    closeCart: closeCart,
    changeCartState: changeCartState,
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
