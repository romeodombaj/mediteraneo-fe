import NavigationContext from "./navigation-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryContext from "./category-context";

const NavigationProvider = (props) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [params, setParams] = useState("/");
  const navigate = useNavigate();
  const categoryCtx = useContext(CategoryContext);

  const goToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [1]);
  };

  const loader = (slug) => {
    setParams(slug);
    setTimeout(() => {
      navigate(`${slug}`);
      goToTop();
      setIsNavigating(false);
      closeAll();
    }, 250);
  };

  const loadPage = (catID = "") => {
    if (params !== catID) {
      let slug = "";
      if (catID !== "") {
        slug =
          categoryCtx.categories[
            categoryCtx.categories.findIndex((category) => category.id == catID)
          ].slug;
      }

      loader("/" + slug);
    } else {
      goToTop();
      setIsNavigating(false);
      closeAll();
    }
  };

  const loadCategory = (catID) => {
    loadPage(catID);
  };

  const loadHomePage = () => {
    loadPage();
  };

  const loadOtherPages = (slug) => {
    loader(slug);
  };

  const changeNavigationState = () => {
    setIsNavigating((prevState) => !prevState);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const changeCartState = () => {
    if (!cartOpen) {
      closeSaved();
      setTimeout(() => {
        setCartOpen((prevState) => !prevState);
      }, [100]);
    } else {
      setCartOpen((prevState) => !prevState);
    }
  };

  const changeSavedState = () => {
    if (!savedOpen) {
      closeCart();
      setTimeout(() => {
        setSavedOpen((prevState) => !prevState);
      }, [100]);
    } else {
      setSavedOpen((prevState) => !prevState);
    }
  };

  const closeSaved = () => {
    setSavedOpen(false);
  };

  const closeAll = () => {
    closeSaved();
    closeCart();
  };

  const navigationContext = {
    loadCategory: loadCategory,
    loadPage: loadPage,
    isNavigating: isNavigating,
    cartOpen: cartOpen,
    savedOpen: savedOpen,
    loadOtherPages: loadOtherPages,
    closeCart: closeCart,
    changeCartState: changeCartState,
    changeSavedState: changeSavedState,
    closeSaved: closeSaved,
    loadHomePage: loadHomePage,
    changeNavigationState: changeNavigationState,
    goToTop: goToTop,
  };

  return (
    <NavigationContext.Provider value={navigationContext}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
