import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import ClothsDisplay from "./ClothsDisplay";
import Loader from "../../components/Loader";
import GenerateButtons from "./GenerateButtons";
import TopMatch from "../../assets/images/outfitGenerator/top.svg";
import BottomMatch from "../../assets/images/outfitGenerator/bottom.svg";
import AddToCollection from "../../assets/images/outfitGenerator/add.svg";
import WaitingImage from "../../assets/images/outfitGenerator/waiting.svg";

const OutfitGenerator = ({ generate, isUploaded, selectedImages, handleReset, handleClick }) => {
  return (
    <>
      {!generate ? (
        <>
          {/* Generate Outfit Body */}
          {!isUploaded ? (
            <Container>
              <section className="outfit-body">
                <img
                  src={WaitingImage}
                  alt="An avatar showing a boy waiting for you to upload your file(s)"
                />
                Waiting for you to upload images
              </section>
            </Container>
          ) : (
            <Container>
              {/* Cloths Display */}
              <ClothsDisplay selectedImages={selectedImages} />

              {!isUploaded && selectedImages.dress.length > 0 && (
                <Loader isLoading={true} /> 
              )}

              {/* Reset button */}
              <section
                style={{
                  display: "flex",
                  marginBottom: "29px",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="dark"
                  style={{
                    color: "white",
                    width: "183.5px",
                    marginRight: "10px"
                  }}
                  className="outfit-button"
                  onClick={e => handleReset(e)}
                >
                  Reset
                </Button>
              </section>

              {/* Generate Buttons */}
              <GenerateButtons selectedImages={selectedImages} handleClick={handleClick} />
            </Container>
          )}
        </>
      ) : (
        <>
          {/* Display Match(es) */}
          <Container>
            <section className="outfit-body">
              <img
                src={TopMatch}
                alt="Best Top Match"
              />
              <img
                src={BottomMatch}
                alt="Best Bottom Match"
                style={{ marginTop: "22px" }}
              />
              <img
                height="41px"
                width="139px"
                src={AddToCollection}
                alt="Add to Collection"
                style={{ marginTop: "22px", cursor: "pointer" }}
              />
            </section>
          </Container>
          {/* Generate Buttons */}
          <GenerateButtons selectedImages={selectedImages} handleClick={handleClick} />
        </>
      )}
    </>
  );
};

export default OutfitGenerator;
