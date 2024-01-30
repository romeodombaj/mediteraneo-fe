import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import CategoryProvider from "./components/store/CategoryProvider";
import NavigationProvider from "./components/store/NavigationProvider";
import SavedProvider from "./components/store/SavedProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <HashRouter hashType="hashbang">
        <NavigationProvider>
          <SavedProvider>
            <App />
          </SavedProvider>
        </NavigationProvider>
      </HashRouter>
    </CategoryProvider>
  </React.StrictMode>
);
