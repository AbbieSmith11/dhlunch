import { createRoot } from "react-dom/client";
import App from "./containers/App.jsx";
import React from "react";

import "./index.scss"

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);