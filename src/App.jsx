import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Clientele from "./pages/clientele/Clientele";
import Product from "./pages/product/Product";
import InvestorRelations from "./pages/investorRelations/InvestorRelations";
import ScrollToTop from "./layout/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Clientele />} />
        <Route path="/products" element={<Product />} />
        <Route path="/investorrelations" element={<InvestorRelations />} />
      </Routes>
    </Router>
  );
}

export default App;
