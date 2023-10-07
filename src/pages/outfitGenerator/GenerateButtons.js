import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const GenerateButtons = ({ selectedImages, handleClick, setGenerate, selectedCategory, topImages, belowTorsoImages, setMatchesData, setMatchResponse }) => {
  const id = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("token");

  const generateBestToLeast = async () => {
    setGenerate(true);

    const response = await fetch(`https://skyfitzz.up.railway.app/api/v1/cloth/generate/${id}?category=${selectedCategory}`, {
      method: "GET",
      headers: {"Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json="},
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Generate Data: ", data);
    }
    else {
      const new_images = {"top_images": topImages, "below_torso_images": belowTorsoImages}
      setMatchResponse(true)
      const new_response = await fetch(`http://localhost:5000/train`, {
        method: "POST",
        headers: {"Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json"},
        body: JSON.stringify(new_images)
      });
      if (new_response.ok) {
        const matches_response = await fetch(`http://localhost:5000/matches`, {
          method: "GET",
          headers: {"Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json"}
        });
        const data = await matches_response.json()
        setMatchResponse(false)
        setMatchesData(data)
      }
    }
  };

  return (
    <Container className="outfit-buttons">
      {selectedImages.TOP.length !== 0 &&
      selectedImages.BOTTOM.length !== 0 ? (
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
      {selectedImages.DRESS.length !== 0 ? (
        <Button variant="light" className="outfit-button" onClick={e => handleClick(e)} style={{ borderColor: "black" }}>
          Generate Best Dress
        </Button>
      ) : (
        <Button variant="light" className="outfit-button" style={{ borderColor: "black" }} disabled>
          Generate Best Dress
        </Button>
      )}
      {selectedImages.TOP.length !== 0 &&
      selectedImages.BOTTOM.length !== 0 ? (
        <Button variant="light" className="outfit-button" onClick={() => generateBestToLeast()} style={{ borderColor: "black" }}>
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
