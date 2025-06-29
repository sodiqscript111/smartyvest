// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import Header from "./pages/header";
import ProductsAndSolutions from "./pages/ProductsAndSolutions";
import SignUpForm from "./pages/signup";
import WhyInvestWithUs from "./pages/whyus";
import Footer from "./pages/footer";
import Register from "./pages/register";
import PropertySection from "./components/PropertySection";
import Login from "./pages/login";


function MainSite() {
  return (
    <>
      <Header />
      <PropertySection />
      <ProductsAndSolutions />
      <WhyInvestWithUs />
      <SignUpForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/products-services" element={<ComingSoon />} />
        <Route path="/contact-us" element={<ComingSoon />} />
        <Route path="/insights" element={<ComingSoon />} />
        <Route path="/learn-more" element={<ComingSoon />} />
        <Route path="/register" element={<Register/>}/>
        {/* fallback route (optional) */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
