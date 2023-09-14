import Col from "react-bootstrap/Col";

const WeatherInfo = ({ weather }) => {
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
