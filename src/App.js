import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from "./login";
import Signup from "./signup";
import Pricing from "./Pricing"; 
import Redirect from './Redirect';
import PageNotFound from './PageNotFound';
import Landing from "./pages/landing/Landing";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Ewardrobe from "./pages/ewardrobe/Ewardrobe";
import UploadOutfits from "./pages/outfitGenerator/UploadOutfits";
import Fashion from "./pages/fashion/fashion";
import ProfilePage from "./pages/profile/ProfilePage";
import Verification from "./verification";




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/landing-page' element={<Landing />} />
        <Route path='/e-wardrobe' element={<Ewardrobe />} />
        <Route path='/outfit-generator' element={<UploadOutfits />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/verify' element={<Verification />} />
      </Routes>
    </Router>

  );
};

export default App;
