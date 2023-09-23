import React from 'react';
import './LogoLoader.css'; // Import your CSS for styling
import Logo from './Logo'; // Import your logo component

const LogoLoader = () => {
  return (
    <div className="LogoLoader">
      <Logo className="rotate" />
    </div>
  );
};

export default LogoLoader;
