import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

const ClothsDisplay = ({ selectedImages }) => {
  return (
    <>
      {/* Tops Images */}
      {selectedImages.TOPS.length > 0 && (
        <>
          <h3 className="cloth-display">Tops</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.TOPS.map((image) => (
              <Col key={`TOPS-${image.name}`}>
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
      {selectedImages.BOTTOMS.length > 0 && (
        <>
          <h3 className="cloth-display">Bottoms</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.BOTTOMS.map((image) => (
              <Col key={`BOTTOMS-${image.name}`}>
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
