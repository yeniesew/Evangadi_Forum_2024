import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
