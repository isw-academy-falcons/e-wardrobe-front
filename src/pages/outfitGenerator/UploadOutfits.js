import axios from "axios";
import { useContext, useEffect } from "react";

import "./UploadOutfits.css";
import Login from "../../login";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import OutfitGenerator from "./OutfitGenerator";
import AppNavBar from "../../components/AppNavBar";
import AppContext from "../../contexts/AppContext";
import OutfitGeneratorHeader from "./OutfitGeneratorHeader";

const UploadOutfits = () => {
  const city = 'Lagos';
	const countryCode = 'NG';
	const stateCode = 'Lagos State';
  const accessToken = localStorage.getItem("token");
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const {
    weather,
    latitude,
    longitude,
    setWeather,
    setLatitude,
    setLongitude,
  } = useContext(AppContext)

  // Function to get the current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
      }
    );
  });

  useEffect(() => {
    // Function to execute when user doesn't grant location access
    const whenLatOrLonIsNull = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}, ${stateCode}, ${countryCode}&limit=5&appid=${apiKey}`)
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      }
      catch(error) {
      };
    };

    // When latitude or longitude is empty
    if (!latitude || !longitude) {
      whenLatOrLonIsNull();
    }
  })

  useEffect(() => {
    const fetchWeather = async () => {
      // Make an API request to get weather data
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        setWeather(response.data);
      }
      catch(error) {
      }
    }
    fetchWeather();
  })

  // If weather response is empty
  if (!weather) {
    return <Loader isLoading={true} />;
  }

  return (
    <>
      {accessToken ? (
        <>
          {/* Navbar */}
          <AppNavBar />
          {/* Generate Outfit Header */}
          <OutfitGeneratorHeader />
          {/* Oufit Generator */}
          <OutfitGenerator />
          {/* Footer */}
          <Footer />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default UploadOutfits;
