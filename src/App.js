import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import ItemList from "./components/ItemListPage/ItemList";
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navigation/NavBar";
import { Fragment } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <FrontPage />
      </>
    ),
  },
  {
    path: "/:categoryID",
    element: (
      <>
        <NavBar />
        <ItemList />
      </>
    ),
  },
]);

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Fragment>
  );
};

export default App;
