import React from 'react';
import homescreen from "../assets/image7.svg";
import './Home.css';
import Logo from "../components/Logo";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

// Creating the navigation handlers
  const loginHandler =()=>navigate('/login')
  const signUpHandler = ()=> navigate('/signup')

  return (
    <div className="min-h-screen flex justify-center items-center p-2 homescreen">
      <div className=" md:flex w-[90%] md:h-2/5">
        {/* Image section */}
        <div className="lg:w-2/5">
          <img
            src={homescreen}
            alt="homescreen"
            className="w-full h-auto lg:rounded-l-2xl"
          />
        </div>

        {/* Details section */}
        <div className="lg:w-3/5 sm:text-sm dark text-center flex lg:rounded-r-2xl">
          <div className="m-auto">
        
          <Logo className="yellow"/>
          <p className="text my-2 lg:my-10 lg:text-xl ">
            Experience Fashion Transformation with Our Fashion Generator App!
          </p>
          <section className="sub-text">
            <p>Explore a Universe of Stylish Possibilities</p>
            <p>Start Your Journey Now to Redefine Fashion Excellence</p>
          </section>
          <section className="buttons mt-4">
            <p className="text-white my-4 lg:text-xl sm:text-sm">Ready to get Started ?</p>
            <div>
              <button className="y-btn btn" onClick={loginHandler}>LOGIN</button>
              <button className="t-btn btn" onClick={signUpHandler}>SIGN UP</button>
            </div>
          </section>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
