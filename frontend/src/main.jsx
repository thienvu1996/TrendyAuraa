import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import ShopContextProvider from "./context/ShopContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Could not find root element!");
}
