import axios from "axios";
import { useEffect, useState } from "react";

import "./UploadOutfits.css";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import OutfitGenerator from "./OutfitGenerator";
import AppNavBar from "../../components/AppNavBar";
import OutfitGeneratorHeader from "./OutfitGeneratorHeader";

const UploadOutfits = () => {
  const city = 'Lagos';
	const countryCode = 'NG';
	const stateCode = 'Lagos State';
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

	const [weather, setWeather] = useState(null);
	const [latitude, setLatitude] = useState(null);
  const [generate, setGenerate] = useState(false);
	const [longitude, setLongitude] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImages, setSelectedImages] = useState({DRESS: [], TOPS: [], BOTTOMS: []});

  useEffect(() => {
    const whenLatOrLonIsNull = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}, ${stateCode}, ${countryCode}&limit=5&appid=${apiKey}`)
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
      }
      catch(error) {
        console.error('Error fetching location:', error);
      };
    };

    // When latitude or longitude is empty
    if (!latitude || !longitude) {
      whenLatOrLonIsNull();
    }
  }, [apiKey, latitude, longitude])

  // Function to execute when user doesn't grant location access

  // Function to get the current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  useEffect(() => {
    console.log("Category", selectedCategory);
    console.log("File(s)", selectedImages);    
  }, [selectedCategory, selectedImages])

  useEffect(() => {
    const fetchWeather = async () => {
      // Make an API request to get weather data
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        setWeather(response.data);
      }
      catch(error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeather();
  }, [apiKey, latitude, longitude])

  // If weather response is empty
  if (!weather) {
    return <Loader isLoading={true} />;
  }

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle image upload
  const handleImageChange = (e, category) => {
    e.preventDefault();
    const files = e.target.files;
    setSelectedImages({...selectedImages, [category]: [...selectedImages[category], ...files]});
    console.log("Cloth Type", category);
    handleShowModal();
    setIsUploaded(true);
  };
  
  // Function to handle generate match button click
  const handleClick = e => {
    e.preventDefault();
    setGenerate(true);
  };
  
  // Function to handle the category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };
  
  const handleReset = e => {
    e.preventDefault();
    setSelectedImages({DRESS: [], TOPS: [], BOTTOMS: []});
  };
  
  return (
    <>
      {/* Navbar */}
      <AppNavBar />
      {/* Generate Outfit Header */}
      <OutfitGeneratorHeader weather={weather} handleImageChange={handleImageChange} showModal={showModal} handleCloseModal={handleCloseModal} handleCategorySelection={handleCategorySelection} />
      {/* Oufit Generator */}
      <OutfitGenerator generate={generate} isUploaded={isUploaded} selectedImages={selectedImages} handleReset={handleReset} handleClick={handleClick} />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default UploadOutfits;
