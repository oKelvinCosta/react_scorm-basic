import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "./assets/scorm/APIWrapper.js";
import "./assets/scorm/SCOFunctions.js";
import "./assets/scorm/scorm-app.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
