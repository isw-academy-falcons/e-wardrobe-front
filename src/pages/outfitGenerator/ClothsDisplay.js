import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

const ClothsDisplay = ({ selectedImages }) => {
  return (
    <>
      {/* Tops Images */}
      {selectedImages.tops.length > 0 && (
        <>
          <h3 className="cloth-display">Tops</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.tops.map((image) => (
              <Col key={`tops-${image.name}`}>
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
      {selectedImages.bottoms.length > 0 && (
        <>
          <h3 className="cloth-display">Bottoms</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.bottoms.map((image) => (
              <Col key={`bottoms-${image.name}`}>
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
      {selectedImages.dress.length > 0 && (
        <>
          <h3 className="cloth-display">Dresses</h3>
          <Row
            xs={1}
            md={3}
            className="g-4"
            style={{ marginBottom: "77px" }}
          >
            {selectedImages.dress.map((image) => (
              <Col key={`dress-${image.name}`}>
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
