import React, { useState } from "react";
import Select from "react-select";
import "./fashion.css";
import ShopNavBar from "../../components/ShopNavbar";
import data from "./fashionData";
import bagData from "./bagData";
import shoeData from "./shoeData";
import { BsSearch } from "react-icons/bs";
import Footer from "../../components/Footer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Fashion = () => {
  // State to track the selected category (men, women)
  const [selectedCategory, setSelectedCategory] = useState("men");
  // State to track the selected option (clothing, bags, shoes)
  const [selectedOption, setSelectedOption] = useState("clothing");

  // State for size, weather, material, and color filters
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  // Define your size, weather, material, and color options here
  const sizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" }
  ];

  const weatherOptions = [
    { value: "sunny", label: "Sunny" },
    { value: "rainy", label: "Rainy" },
    { value: "snowy", label: "Snowy" }
  ];

  const materialOptions = [
    { value: "light", label: "Light" },
    { value: "thick", label: "Thick" }
  ];

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "yellow", label: "Yellow" },
    { value: "pink", label: "Pink" },
    { value: "orange", label: "Orange" },
    { value: "purple", label: "Purple" },
    { value: "brown", label: "Brown" }
  ];

  // Function to handle category selection (men, women)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle option selection (clothing, bags, shoes)
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Function to handle price range change


  // Function to apply filters
  const applyFilters = () => {
    // Implement filtering logic based on selectedSize, selectedWeather, selectedMaterial, selectedColor, and priceRange
    // Update the currentData state with the filtered data
  };

  // Get the current data based on the selected category and option
  const currentData =
    selectedOption === "clothing"
      ? data[0][selectedCategory]
      : selectedOption === "bags"
      ? bagData[0][selectedCategory]
      : shoeData[0][selectedCategory] || [];

  // Define the fashion, bag, and shoe categories
  const currentCategories =
    selectedOption === "clothing"
      ? [
          "Tops & Shirts",
          "Jackets",
          "Hoodies",
          "Joggers",
          "Tanks & Sleeveless Shirts",
          "Caps & Hats",
          "Shorts"
        ]
      : selectedOption === "bags"
      ? [
          "Briefcase",
          "Tote Bag",
          "Messenger Bag",
          "Laptop Bag",
          "Duffel",
          "Fanny Pack",
          "Gym Bag",
          "Bucket Bag"
        ]
      : [
          "Sneakers",
          "Dress Shoes",
          "Boots",
          "Sandals",
          "Athletic Shoes",
          "Loafers",
          "Slippers",
          "Oxfords"
        ];

  return (
    <div>
      <ShopNavBar onSelectCategory={handleCategoryChange} />
      <div className="fashion-wrapper">
        <div className="fashion-card-one">
          <div className="fashion-search-input">
            <input type="search" placeholder="Search" />
            <span className="fashion-search-icon">
              <BsSearch />
            </span>
          </div>
          <h2 className="fashion-categories-header">CATEGORIES</h2>
          {/* Use a map to display the current categories */}
          {currentCategories.map((category) => (
            <a
              key={category}
              className="fashion-categories"
              href="#"
              onClick={() => handleOptionChange(category)}
            >
              {category}
            </a>
          ))}
          <div className="filter-container">
            <h2 className="filter-heading">FILTER</h2>

            {/* Filter by Price */}
            <div className="filter-option">
              <label>Shop by Price:</label>
              <div className="input-range-container">
         
      <Slider
        min={0}
        max={1000}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Selected Value: {sliderValue}</p>

              </div>
            </div>

            {/* Filter by Size */}
            <div className="filter-option">
              <label>Size:</label>
              <div className="select-container">
                <Select
                  options={sizeOptions}
                  value={selectedSize}
                  onChange={(value) => setSelectedSize(value)}
                  isClearable
                />
              </div>
            </div>

            {/* Filter by Weather */}
            <div className="filter-option">
              <label>Weather:</label>
              <div className="select-container">
                <Select
                  options={weatherOptions}
                  value={selectedWeather}
                  onChange={(value) => setSelectedWeather(value)}
                  isClearable
                />
              </div>
            </div>

            {/* Filter by Material */}
            <div className="filter-option">
              <label>Material:</label>
              <div className="select-container">
                <Select
                  options={materialOptions}
                  value={selectedMaterial}
                  onChange={(value) => setSelectedMaterial(value)}
                  isClearable
                />
              </div>
            </div>

            {/* Filter by Color */}
            <div className="filter-option">
              <label>Color:</label>
              <div className="multi-select-container">
                <Select
                  options={colorOptions}
                  value={selectedColor}
                  onChange={(value) => setSelectedColor(value)}
                  isMulti
                />
              </div>
            </div>

            <button className="apply-button" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>

        <div className="fashion-card-two">
          <div>
            <p>
              <a
                href="#"
                className="fashion-types"
                onClick={() => handleOptionChange("clothing")}
              >
                Clothing
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="fashion-types"
                onClick={() => handleOptionChange("bags")}
              >
                Bags
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="fashion-types"
                onClick={() => handleOptionChange("shoes")}
              >
                Shoes
              </a>{" "}
            </p>
          </div>
          <div className="fashion-cards">
            {currentData.map((item) => (
              <div key={item.id} className="fashion-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button className="fashion-button">Buy</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fashion;
