import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home';
import Login from "./login";
import Signup from "./signup";
import Pricing from "./Pricing";
import Redirect from './Redirect';
import About from "./pages/about/About";
import Verification from "./verification";
import PageNotFound from './PageNotFound';
import Tailor from "./pages/laundry/Tailor";
import Landing from "./pages/landing/Landing";
import Gallery from "./pages/gallery/Gallery";
import Fashion from "./pages/fashion/fashion";
import Laundry from "./pages/laundry/Laundry";
import Payment from "./pages/Payment/PaymentForm";
import Ewardrobe from "./pages/ewardrobe/Ewardrobe";
import FashionCart from "./pages/fashion/fashioncart";
import ProfilePage from "./pages/profile/ProfilePage";
import { CartProvider } from './pages/fashion/CartContext';
import FashionProduct from "./pages/fashion/fashionProduct";
import UploadOutfits from "./pages/outfitGenerator/UploadOutfits";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/tailor" element={<Tailor/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/laundry" element={<Laundry/>}/>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/landing-page" element={<Landing />} />
          <Route path="/e-wardrobe" element={<Ewardrobe />} />
          <Route path="/fashion-cart" element={<FashionCart />} />
          <Route path="/outfit-generator" element={<UploadOutfits />} />
          <Route path="/fashion-product/:productData" element={<FashionProduct />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
