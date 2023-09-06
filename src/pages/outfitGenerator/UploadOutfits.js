import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";

import "./UploadOutfits.css";
import Footer from "../../components/Footer";
import AppNavBar from "../../components/AppNavBar";
import UploadImage from "../../assets/images/outfitGenerator/upload.svg";
import WaitingImage from "../../assets/images/outfitGenerator/waiting.svg";

const UploadOutfits = () => {
  const city = 'Lagos';
	const countryCode = 'NG';
	const stateCode = 'Lagos State';
  const apiKey = '30cb3a6478f5520b4ad670909cf5b82a';

	const [weather, setWeather] = useState(null);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedImages, setSelectedImages] = useState({dress: [], tops: [], bottoms: []});

  // Function to execute when user doesn't grant location access
  const whenLatOrLonIsNull = () => {
    axios
			.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}, ${stateCode}, ${countryCode}&limit=5&appid=${apiKey}`)
			.then(response => {
				setLatitude(response.data[0].lat);
				setLongitude(response.data[0].lon);
			})
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  };

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
    // Make an API request to get weather data
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [apiKey, latitude, longitude]);

  // When latitude or longitude is empty
  if (!latitude || !longitude) {
    whenLatOrLonIsNull();
  }

  // If weather response is empty
  if (!weather) {
    return <div>Loading...</div>;
  }

  // Get weather icon
	const iconCode = weather.weather[0].icon;
	const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  // Round the temperature to the nearest integer
  const temperature = Math.round(weather.main.temp);
  // Get the current date and time
  const currentDate = new Date();
  // Extract day, date, month, and time
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const time = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  const handleImageChange = (e, category) => {
    e.preventDefault();
    const files = e.target.files;
    setSelectedImages({...selectedImages, [category]: [...selectedImages[category], ...files]});
    setIsUploaded(true);
  };

  return (
		<>
			{/* Navbar */}
			<AppNavBar />
			{/* Generate Outfit Header */}
			<Container>
				<Row>
          {/* Weather results */}
					<Col>
            <section className="weather-value">
              {weather.weather[0].description}
              <img src={iconUrl} alt="Weather Icon" />
              {temperature}°C
            </section>
            <section className="weather-value">{day} {date}</section>
            <section className="weather-value">{time}</section>
					</Col>
					<Col xs={8} className="text-center outfit-header">GENERATE OUTFIT</Col>
					<Col className="text-center outfit-upload">
            <img src={UploadImage} alt="Upload Icon" height="66.20px" width="66.20px" />
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic" className="outfit-text">
                Upload Image
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="text-center item-dropdown-menu">
                  <label htmlFor="dress-input">Dress</label>
                  <input id="dress-input" type="file" accept="image/*" multiple onChange={e => handleImageChange(e, "dress")} hidden />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className="text-center item-dropdown-menu">
                  <label htmlFor="top-input">Tops</label>
                  <input id="top-input" type="file" accept="image/*" multiple onChange={e => handleImageChange(e, "tops")} hidden />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className="text-center item-dropdown-menu">
                  <label htmlFor="bottoms-input">Bottoms</label>
                  <input id="bottoms-input" type="file" accept="image/*" multiple onChange={e => handleImageChange(e, "bottoms")} hidden />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
				</Row>
			</Container>
      {/* Generate Outfit Body */}
      {!isUploaded ? (
        <Container>
          <section className="outfit-body">
            <img src={WaitingImage} alt="An avatar showing a boy waiting for you to upload your file(s)" />
            Waiting for you to upload images
          </section>
        </Container>
      ) : (
        <Container>
          {/* Tops Images */}
          {selectedImages.tops.length > 0 && (
            <>
              <h3 className="cloth-display">Tops</h3>
              <Row xs={1} md={3} className="g-4" style={{ marginBottom: "77px" }}>
                {selectedImages.tops.map(image => (
                  <Col key={`tops-${image.name}`}>
                    <Card className="cloth-container">
                      <Card.Img variant="bottom" src={URL.createObjectURL(image)} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {/* Bottoms Images */}
          {selectedImages.bottoms.length > 0 && (
            <>
              <h3 className="cloth-display">Bottoms</h3>
              <Row xs={1} md={3} className="g-4" style={{ marginBottom: "77px" }}>
                {selectedImages.bottoms.map(image => (
                  <Col key={`bottoms-${image.name}`}>
                    <Card className="cloth-container">
                      <Card.Img variant="bottom" src={URL.createObjectURL(image)} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {/* Dress Images */}
          {selectedImages.dress.length > 0 && (
            <>
              <h3 className="cloth-display">Dresses</h3>
              <Row xs={1} md={3} className="g-4" style={{ marginBottom: "77px" }}>
                {selectedImages.dress.map(image => (
                  <Col key={`dress-${image.name}`}>
                    <Card className="cloth-container">
                      <Card.Img variant="bottom" src={URL.createObjectURL(image)} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Container>
      )}
      {/* Footer */}
			<Footer />
		</>
	);
};

export default UploadOutfits;
