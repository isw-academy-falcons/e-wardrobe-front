import { useState } from "react";
import AppContext from "./AppContext";

export const AppProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [clothType, setClothType] = useState("");
	const [latitude, setLatitude] = useState(null);
  const [topImages, setTopImages] = useState([]);
  const [generate, setGenerate] = useState(false);
	const [longitude, setLongitude] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [belowTorsoImages, setBelowTorsoImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState({DRESS: [], TOP: [], BOTTOM: []});

  return (
    <AppContext.Provider
      value={{
        weather,
        latitude,
        generate,
        clothType,
        topImages,
        longitude,
        showModal,
        isLoading,
        setWeather,
        isUploaded,
        setLatitude,
        setGenerate,
        setClothType,
        setTopImages,
        setLongitude,
        setShowModal,
        setIsLoading,
        setIsUploaded,
        selectedImages,
        selectedCategory,
        belowTorsoImages,
        setSelectedImages,
        setSelectedCategory,
        setBelowTorsoImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
