import { Routes, Route } from "react-router-dom";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Contact from "@/pages/Contact/Contact";
import Download from "@/pages/Download/Download";


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
