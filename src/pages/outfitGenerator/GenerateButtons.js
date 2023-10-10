import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from "react-bootstrap/Button";
import { BASE_URL } from '../../assets/baseUrl';
import Container from "react-bootstrap/Container";

const GenerateButtons = ({
  setDress,
  topImages,
  handleClick,
  setGenerate,
  setTopMatch,
  setBestMatch,
  selectedImages,
  setMatchesData,
  setBottomMatch,
  setDressChoice,
  selectedCategory,
  belowTorsoImages,
  setMatchResponse,
  setBestToLeastMatch
}) => {
  const id = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("token");
  const [uploadedClothes, setUploadedClothes] = useState([]);

  useEffect(() => {
    const getUploadedClothes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cloth/all/clothes?userId=${id}&clothType=${'DRESS'}`)
        setUploadedClothes(response.data.content.map(cloth =>  cloth.imageUrl));
      } catch (error) {
        console.log("Error message: ", error);
      }
    };
    
    getUploadedClothes();
  }, [id, uploadedClothes])

  const generateBestToLeast = async () => {
    setGenerate(true);

    const response = await fetch(
      `https://skyfitzz.up.railway.app/api/v1/cloth/generate/${id}?category=${selectedCategory}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json=",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Generate Data: ", data);
      setMatchResponse(false);
      setBestToLeastMatch(true);
      setMatchesData(data);
    } else {
      const new_images = {
        top_images: topImages,
        below_torso_images: belowTorsoImages,
      };
      setMatchResponse(true);
      const new_response = await fetch(`http://localhost:5000/train`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_images),
      });
      if (new_response.ok) {
        const matches_response = await fetch(`http://localhost:5000/matches`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        const data = await matches_response.json();
        setMatchResponse(false);
        setBestToLeastMatch(true);
        setMatchesData(data);
      }
    }
  };

  const generateBestMatch = async () => {
    setGenerate(true);

    const response = await fetch(
      `https://skyfitzz.up.railway.app/api/v1/cloth/generate/${id}?category=${selectedCategory}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json=",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Generate Data: ", data);
      setMatchResponse(false);
      setBestMatch(true);
      setTopMatch(data.top_matches[0]);
      setBottomMatch(data.bottom_matches[0]);
    } else {
      const new_images = {
        top_images: topImages,
        below_torso_images: belowTorsoImages,
      };
      setMatchResponse(true);
      const new_response = await fetch(`http://localhost:5000/train`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_images),
      });
      if (new_response.ok) {
        const matches_response = await fetch(`http://localhost:5000/matches`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        const data = await matches_response.json();
        setMatchResponse(false);
        setBestMatch(true);
        setTopMatch(data.top_matches[0]);
        setBottomMatch(data.bottom_matches[0]);
      }
    }
  };

  const generateDress = async () => {
    setGenerate(true);
    const response = await fetch(
      `http://localhost:5000/random_dress`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'dress_images': uploadedClothes })
      }
    );
    setMatchResponse(true);
    const data = await response.json();
    if (response.ok) {
      setMatchResponse(false);
      setDressChoice(true);
      setDress(data);
    } else {
      console.log(setGenerate);
      console.log(selectedCategory);
    }
  };

  return (
    <Container className="outfit-buttons">
      {selectedImages.TOP.length !== 0 && selectedImages.BOTTOM.length !== 0 ? (
        <Button
          variant="dark"
          className="outfit-button"
          onClick={() => generateBestMatch()}
          style={{
            background:
              "linear-gradient(92deg, #FFD755 -24.34%, #E12D15 132.7%)",
          }}
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
      {selectedImages.DRESS.length !== 0 ? (
        <Button
          variant="light"
          className="outfit-button"
          onClick={() => generateDress()}
          style={{ borderColor: "black" }}
        >
          Generate Best Dress
        </Button>
      ) : (
        <Button
          disabled
          variant="light"
          className="outfit-button"
          style={{ borderColor: "black" }}
        >
          Generate Best Dress
        </Button>
      )}
      {selectedImages.TOP.length !== 0 && selectedImages.BOTTOM.length !== 0 ? (
        <Button
          variant="light"
          className="outfit-button"
          style={{ borderColor: "black" }}
          onClick={() => generateBestToLeast()}
        >
          Generate Best To Least
        </Button>
      ) : (
        <Button
          disabled
          variant="light"
          className="outfit-button"
          style={{ borderColor: "black" }}
        >
          Generate Best To Least
        </Button>
      )}
    </Container>
  );
};

export default GenerateButtons;
