import axios from "axios";
import { useEffect, useState } from "react";

import "./UploadOutfits.css";
import Login from "../../login";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import OutfitGenerator from "./OutfitGenerator";
import AppNavBar from "../../components/AppNavBar";
import { Toast } from "../../components/ApiResponse";
import OutfitGeneratorHeader from "./OutfitGeneratorHeader";

const UploadOutfits = () => {
  const city = 'Lagos';
	const countryCode = 'NG';
	const stateCode = 'Lagos State';
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

	const [weather, setWeather] = useState(null);
  const [clothType, setClothType] = useState("");
	const [latitude, setLatitude] = useState(null);
  const [topImages, setTopImages] = useState([]);
  const [generate, setGenerate] = useState(false);
	const [longitude, setLongitude] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const accessToken = localStorage.getItem("token");
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [belowTorsoImages, setBelowTorsoImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState({DRESS: [], TOP: [], BOTTOM: []});

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
  }, []);

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
  }, [apiKey, latitude, longitude])

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
  }, [apiKey, latitude, longitude])

  // If weather response is empty
  if (!weather) {
    return <Loader isLoading={true} />;
  }

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle image upload
  const handleImageChange = (e, category) => {
    e.preventDefault();
    const files = e.target.files;
    setSelectedImages({...selectedImages, [category]: [...selectedImages[category], ...files]});
    setClothType(category);
    handleShowModal();
    setIsUploaded(true);
  };

  // Function to hide the modal
  const handleCloseModal = async () => {
    try {
      if (accessToken !== ""){
        const formData = new FormData();

        // Append each selected image to the FormData object
        selectedImages[clothType].forEach(image => {
          formData.append("file", image);
        });

        // Append other data to the FormData object
        formData.append("category", selectedCategory);
        formData.append("clothType", clothType);

        const response = await fetch(`https://skyfitzz.up.railway.app/api/v1/cloth/upload`, {
          method: "POST",
          headers: {"Authorization": `Bearer ${accessToken}`},
          body: formData
        });

        if (response.ok) {
          const responseData = await response.json();
          if (clothType === "TOP") {
            setTopImages(responseData);
          }
          else if (clothType === "BOTTOM") {
            setBelowTorsoImages(responseData);
          }
          Toast.fire({
            icon: "success",
            title: "Successfully uploaded images"
          })
        }
        else {
          Toast.fire({
            icon: "error",
            title: "Upload failed"
          })
        }
      }
      else {
        Toast.fire({
          icon: "error",
          title: "Upload failed"
        })
      }
    } catch (error) {
    }
    setShowModal(false);
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
    setSelectedImages({DRESS: [], TOP: [], BOTTOM: []});
  };

  return (
    <>
      {accessToken ? (
        <>
          {/* Navbar */}
          <AppNavBar />
          {/* Generate Outfit Header */}
          <OutfitGeneratorHeader
            weather={weather}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            handleImageChange={handleImageChange}
            handleCategorySelection={handleCategorySelection}
          />
          {/* Oufit Generator */}
          <OutfitGenerator
            generate={generate}
            topImages={topImages}
            isUploaded={isUploaded}
            handleReset={handleReset}
            handleClick={handleClick}
            setGenerate={setGenerate}
            selectedImages={selectedImages}
            selectedCategory={selectedCategory}
            belowTorsoImages={belowTorsoImages}
          />
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
