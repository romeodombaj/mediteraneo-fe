import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CategoryProvider from "./components/store/CategoryProvider";
import LoadingProvider from "./components/store/LoadingProvider";
import NavigationProvider from "./components/store/NavigationProvider";
import SavedProvider from "./components/store/SavedProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <CategoryProvider>
        <BrowserRouter>
          <NavigationProvider>
            <SavedProvider>
              <App />
            </SavedProvider>
          </NavigationProvider>
        </BrowserRouter>
      </CategoryProvider>
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
