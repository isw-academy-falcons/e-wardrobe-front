import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import WeatherInfo from "./WeatherInfo";
import ImageUploader from "./ImageUploader";

const OutfitGeneratorHeader = () => {
  return (
    <Container>
      <Row>
        {/* Weather results */}
        <WeatherInfo />
        <Col xs={8} className="text-center outfit-header">
          GENERATE OUTFIT
        </Col>
        {/* Upload Image(s) */}
        <ImageUploader />
      </Row>
    </Container>
  );
};

export default OutfitGeneratorHeader;
