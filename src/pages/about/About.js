import React from 'react';
import AppNavBar from '../../components/AppNavBar';
import img6 from '../../assets/images/about/Image.svg';
import './About.css'

const About = () => {
  return (
    <>
      <AppNavBar/>
      <div className="about  min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center md:px-20 mt-0 about-container" style={{backgroundImage: `url(${img6})`}}>
        <div className="text-white text-center px-4 max-h-[60%]">

          <h2 className="text-2xl font-bold mb-2">ABOUT US</h2>
          <p className="text-md mb-4">At Outfit Match Generator, we believe that fashion is an expression of individuality and personality.
           Our platform is dedicated to helping you uncover your unique style and effortlessly create outfits that 
           resonate with who you are. Whether you're a fashion enthusiast looking to experiment with new looks
            or someone seeking everyday inspiration, we're here to make outfit planning an enjoyable experience.</p>

          <h2 className="text-2xl font-bold mb-2">OUR MISSION</h2>
          <p className="text-md mb-4">We empower your fashion journey with seamless outfit matching. Our
           tailored suggestions
           celebrate diverse styles through advanced technology and 
          passion for fashion. Count on us as your trusted companion in curating your wardrobe.</p>

          <h2 className="text-2xl font-bold mb-2">TEAM</h2>
          <p className="text-md mb-4">Our diverse team merges fashion, tech, and creativity to redefine fashion's
           approach. We blend styling artistry with algorithms, crafting outfits that inspire confidence. 
           With trend insight and innovation, we're thrilled to join your fashion journey.</p>
        </div>
      </div>
    </>
  );
}

export default About;
