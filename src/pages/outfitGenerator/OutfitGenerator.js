import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Slide } from "react-slideshow-image";
import Container from "react-bootstrap/Container";

import ClothsDisplay from "./ClothsDisplay";
import Loader from "../../components/Loader";
import GenerateButtons from "./GenerateButtons";
import AddToCollection from "../../assets/images/outfitGenerator/add.svg";
import WaitingImage from "../../assets/images/outfitGenerator/waiting.svg";

const OutfitGenerator = ({ generate, isUploaded, selectedImages, handleReset, handleClick, setGenerate, selectedCategory, topImages, belowTorsoImages }) => {
  const [matchesData, setMatchesData] = useState({});
  const [topMatch, setTopMatch] = useState({});
  const [bottomMatch, setBottomMatch] = useState({});
  const [matchResponse, setMatchResponse] = useState(true);
  const [bestMatch, setBestMatch] = useState(false);
  const [bestToLeastMatch, setBestToLeastMatch] = useState(false);
  const new_images = {top_images: topImages, below_torso_images: belowTorsoImages};

  const addToCollection = async e => {
    e.preventDefault();
  };

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
                    marginRight: "10px",
                  }}
                  className="outfit-button"
                  onClick={(e) => handleReset(e)}
                >
                  Reset
                </Button>
              </section>

              {/* Generate Buttons */}
              <GenerateButtons
                topImages={topImages}
                new_images={new_images}
                handleClick={handleClick}
                setGenerate={setGenerate}
                setTopMatch={setTopMatch}
                setBestMatch={setBestMatch}
                selectedImages={selectedImages}
                setMatchesData={setMatchesData}
                setBottomMatch={setBottomMatch}
                selectedCategory={selectedCategory}
                belowTorsoImages={belowTorsoImages}
                setMatchResponse={setMatchResponse}
                setBestToLeastMatch={setBestToLeastMatch}
              />
            </Container>
          )}
        </>
      ) : (
        <>
          {/* Display Match(es) */}
          <Container>
            {matchResponse ? (
              <section className="outfit-body">
                <Loader isLoading={matchResponse} />
              </section>
            ) : (
              <section>
                {bestToLeastMatch &&
                  <>
                    <Slide slidesToScroll={1} slidesToShow={3} indicators={true}>
                      {matchesData.top_matches.map((top, index) => (
                        <img key={`top-${top.imageUrl}`} src={top} alt={`Top Match${index}`} className="trending-outfit-images" />
                      ))}
                    </Slide>
                    <Slide slidesToScroll={1} slidesToShow={3} indicators={true}>
                      {matchesData.bottom_matches.map((bottom, index) => (
                        <img
                          src={bottom}
                          alt={`Bottom Match${index}`}
                          style={{ marginTop: "22px" }}
                          key={`top-${bottom.imageUrl}`}
                          className="trending-outfit-images"
                        />
                      ))}
                    </Slide>
                  </>
                }
                <section className="outfit-body">
                  {bestMatch &&
                    <>
                      <img src={topMatch} alt="Top match" className="trending-outfit-images" />
                      <img src={bottomMatch} alt="Bottom Match" className="trending-outfit-images" />
                    </>
                  }
                  <img
                    height="41px"
                    width="139px"
                    src={AddToCollection}
                    alt="Add to Collection"
                    onClick={(e) => addToCollection(e)}
                    style={{ marginTop: "22px", cursor: "pointer" }}
                  />
                </section>
              </section>
            )}
          </Container>
          {/* Generate Buttons */}
          <GenerateButtons
            topImages={topImages}
            new_images={new_images}
            handleClick={handleClick}
            setGenerate={setGenerate}
            setTopMatch={setTopMatch}
            setBestMatch={setBestMatch}
            selectedImages={selectedImages}
            setMatchesData={setMatchesData}
            setBottomMatch={setBottomMatch}
            selectedCategory={selectedCategory}
            belowTorsoImages={belowTorsoImages}
            setMatchResponse={setMatchResponse}
            setBestToLeastMatch={setBestToLeastMatch}
          />
        </>
      )}
    </>
  );
};

export default OutfitGenerator;
