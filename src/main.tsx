import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import "./i18n";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback="loading">
      <Navbar />
      <AllRoutes />
      <Footer />
    </Suspense>
  </BrowserRouter>
);
