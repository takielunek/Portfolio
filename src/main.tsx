import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback="loading">
      <AllRoutes />
    </Suspense>
  </BrowserRouter>
);
