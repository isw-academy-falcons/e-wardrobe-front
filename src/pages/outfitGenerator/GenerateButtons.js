import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const GenerateButtons = ({ selectedImages, handleClick }) => {
  return (
    <Container className="outfit-buttons">
      {selectedImages.tops.length !== 0 &&
      selectedImages.bottoms.length !== 0 ? (
        <Button
          variant="dark"
          className="outfit-button"
          style={{
            background:
              "linear-gradient(92deg, #FFD755 -24.34%, #E12D15 132.7%)",
          }}
          onClick={e => handleClick(e)}
        >
          Generate Best Match
        </Button>
      ) : (
        <Button
          disabled
          variant="dark"
          className="outfit-button"
          style={{
            background:
              "linear-gradient(92deg, #FFD755 -24.34%, #E12D15 132.7%)",
          }}
        >
          Generate Best Match
        </Button>
      )}
      {selectedImages.dress.length !== 0 ? (
        <Button variant="light" className="outfit-button" onClick={e => handleClick(e)} style={{ borderColor: "black" }}>
          Generate Best Dress
        </Button>
      ) : (
        <Button variant="light" className="outfit-button" style={{ borderColor: "black" }} disabled>
          Generate Best Dress
        </Button>
      )}
      {selectedImages.tops.length !== 0 &&
      selectedImages.bottoms.length !== 0 ? (
        <Button variant="light" className="outfit-button" onClick={e => handleClick(e)} style={{ borderColor: "black" }}>
          Generate Best To Least
        </Button>
      ) : (
        <Button variant="light" className="outfit-button" style={{ borderColor: "black" }} disabled>
          Generate Best To Least
        </Button>
      )}
    </Container>
  );
};

export default GenerateButtons;
