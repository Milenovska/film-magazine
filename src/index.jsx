import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navigation from "./Navigation";

const App = () => <Navigation />;

createRoot(document.querySelector("#app")).render(<App />);
