import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeModeProvider } from "./context/ThemeModeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollProvider>
      <BrowserRouter>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </BrowserRouter>
    </ScrollProvider>
  </React.StrictMode>,
);
