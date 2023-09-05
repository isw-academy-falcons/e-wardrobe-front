import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Footer from "../../components/Footer";
import AppNavBar from "../../components/AppNavBar";

const UploadOutfits = () => {
	const [weather, setWeather] = useState(null);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
  const apiKey = '30cb3a6478f5520b4ad670909cf5b82a';
  const city = 'Lagos';
	const countryCode = 'NG';
	const stateCode = 'Lagos State';

	useEffect(() => {
		// Make api request to get latitude and longitude
		axios
			.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}, ${stateCode}, ${countryCode}&limit=5&appid=${apiKey}`)
			.then(response => {
				setLatitude(response.data[0].lat);
				setLongitude(response.data[0].lon);
			})
	}, []);

	useEffect(() => {
    // Make an API request to get weather data
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then(response => {
        setWeather(response.data);
				console.log(response);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [apiKey, city, latitude, longitude]);

  if (!weather) {
    return <div>Loading...</div>;
  }

	const iconCode = weather.weather[0].icon;
	console.log(iconCode);
	const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

	return (
		<>
			{/* Navbar */}
			<AppNavBar />
			{/* Generate Outfit Header */}
			<Container>
				<Row>
					<Col className="weather-value">
						<img src={iconUrl} alt="Weather Icon" /> {weather.main.temp}°C
					</Col>
					<Col xs={8} className="text-center"></Col>
					<Col className="text-center"></Col>
				</Row>
			</Container>
			{/* Footer */}
			<Footer />
		</>
	);
};

export default UploadOutfits;
