import React, { useState, useEffect } from 'react'; // Import useEffect
import homeIllustration from "./assets/images/homeIllustration.svg";
import './styles/Home.css';
import Logo from "./components/Logo";
import { useNavigate } from 'react-router-dom';
import LogoLoader from "./components/LogoLoader";

const Home = () => {
  const navigate = useNavigate();

  // Create a state variable to track whether the data or page is ready
  const [isReady, setIsReady] = useState(false);

  // Simulate a delay to mimic data loading
  useEffect(() => {
    // Simulate loading for 2 seconds (adjust as needed)
    const delay = setTimeout(() => {
      setIsReady(true); // Set isReady to true when the data is ready
    }, 4000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  // Creating the navigation handlers
  const loginHandler = () => navigate('/login');
  const signUpHandler = () => navigate('/signup');

  return (
    <div className='home-container'>
      {!isReady ? ( // Conditionally render LogoLoader while data is not ready
        <LogoLoader />
      ) : (
        <>
          <div className='homeSubContainer1'>
            <img className="home-illustration" src={homeIllustration} alt="SVG" />
          </div>
          <div className='homeSubContainer2'>
            <Logo />
            <div>
              <h1 className="home-header">
                Experience Fashion Transformation with Our Fashion Generator App!
              </h1>
              <p className="homeSubHeader">
                Explore a Universe of Stylish Possibilities. Start Your Journey Now to Redefine Fashion Excellence!
              </p>
            </div>
            <p className="home-paragraph">Ready to get Started?</p>
            <div>
              <button className="homescreen-btn-primary" onClick={loginHandler}>LOGIN</button>
              <button className="homescreen-btn-secondary" onClick={signUpHandler}>SIGN UP</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
