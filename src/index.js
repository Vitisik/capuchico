import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextBasket from "./ContextBasket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextBasket>
      <App />
    </ContextBasket>
  </React.StrictMode>
);
