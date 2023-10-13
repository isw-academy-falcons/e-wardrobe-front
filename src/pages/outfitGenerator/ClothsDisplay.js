import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

import AppContext from "../../contexts/AppContext";

const ClothsDisplay = () => {
  const { selectedImages } = useContext(AppContext);

  return (
    <>
      {/* Tops Images */}
      {selectedImages.TOP.length > 0 && (
        <>
          <h3 className="cloth-display">Tops</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.TOP.map((image) => (
              <Col key={`TOP-${image.name}`}>
                <Card className="cloth-container">
                  <Card.Img
                    variant="bottom"
                    src={URL.createObjectURL(image)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Bottoms Images */}
      {selectedImages.BOTTOM.length > 0 && (
        <>
          <h3 className="cloth-display">Bottoms</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.BOTTOM.map((image) => (
              <Col key={`BOTTOM-${image.name}`}>
                <Card className="cloth-container">
                  <Card.Img
                    variant="bottom"
                    src={URL.createObjectURL(image)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Dress Images */}
      {selectedImages.DRESS.length > 0 && (
        <>
          <h3 className="cloth-display">Dresses</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.DRESS.map((image) => (
              <Col key={`DRESS-${image.name}`}>
                <Card className="cloth-container">
                  <Card.Img
                    variant="bottom"
                    src={URL.createObjectURL(image)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ClothsDisplay;
