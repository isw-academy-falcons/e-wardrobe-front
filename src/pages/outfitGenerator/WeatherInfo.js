import { useContext } from "react";
import Col from "react-bootstrap/Col";
import AppContext from "../../contexts/AppContext";

const WeatherInfo = () => {
  const { weather } = useContext(AppContext);

  return (
    <Col>
      <section className="weather-value">
        {weather.weather[0].description}
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
        {Math.round(weather.main.temp)}°C
      </section>
      <section className="weather-value">
        {new Date().toLocaleDateString('en-US', { weekday: 'long' })} {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
      </section>
      <section className="weather-value">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</section>
    </Col>
  );
};

export default WeatherInfo;
