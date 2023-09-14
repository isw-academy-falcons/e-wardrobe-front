import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import WeatherInfo from "./WeatherInfo";
import ImageUploader from "./ImageUploader";

const OutfitGeneratorHeader = ({ weather, handleImageChange, showModal, handleCloseModal, handleCategorySelection }) => {
  return (
    <Container>
      <Row>
        {/* Weather results */}
        <WeatherInfo weather={weather} />
        <Col xs={8} className="text-center outfit-header">
          GENERATE OUTFIT
        </Col>
        {/* Upload Image(s) */}
        <ImageUploader handleImageChange={handleImageChange} showModal={showModal} handleCloseModal={handleCloseModal} handleCategorySelection={handleCategorySelection} />
      </Row>
    </Container>
  );
};

export default OutfitGeneratorHeader;
