import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import AppContext from "../../contexts/AppContext";
import { Toast } from "../../components/ApiResponse";

const ImageModal = () => {
  const accessToken = localStorage.getItem("token");
  const { showModal, setIsLoading, selectedImages, clothType, selectedCategory, setTopImages, setBelowTorsoImages, setShowModal, setSelectedCategory, isLoading } = useContext(AppContext);

  // Function to hide the modal
  const handleCloseModal = async () => {
    setIsLoading(true);

    try {
      if (accessToken !== ""){
        const formData = new FormData();

        // Append each selected image to the FormData object
        selectedImages[clothType].forEach(image => {
          formData.append("file", image);
        });

        // Append other data to the FormData object
        formData.append("category", selectedCategory);
        formData.append("clothType", clothType);

        const response = await fetch(`https://skyfitzz.up.railway.app/api/v1/cloth/upload`, {
          method: "POST",
          headers: {"Authorization": `Bearer ${accessToken}`},
          body: formData
        });

        const responseData = await response.json();

        if (response.ok) {
          setIsLoading(false);
          if (clothType === "TOP") {
            setTopImages(responseData);
          }
          else if (clothType === "BOTTOM") {
            setBelowTorsoImages(responseData);
          }
          Toast.fire({
            icon: "success",
            title: "Successfully uploaded images"
          })
        }
        else {
          Toast.fire({
            icon: "error",
            title: "Upload failed"
          })
        }
      }
      else {
        Toast.fire({
          icon: "error",
          title: "Upload failed"
        })
      }
    } catch (error) {
    }
    setShowModal(false);
  };

  // Function to handle the category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Header className="outfit-modal-header" closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter" className="text-center">
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body >
        <p className="text-center outfit-modal-title">Select Categories</p>
        <p className="text-center outfit-modal-description">Under which categories do your clothes fall under</p>
        <Form>
          {['NATIVE', 'FREE_STYLE', 'ENGLISH'].map((type) => (
            <div key={`default-${type}`} className="mb-3" style={{ marginLeft: "31.78px" }}>
              <Form.Check
                id={`default-${type}`}
                label={`${type}`}
                onClick={() => handleCategorySelection(`${type}`)}
              />
            </div>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer className="outfit-modal-footer">
        {isLoading ?
          <Button
            disabled
            style={{
              background:
                "black"
            }}
            variant="dark"
            onClick={handleCloseModal}
            className="outfit-modal-button"
          >
            Submit
          </Button>
        :
          <Button
            style={{
              background:
                "black"
            }}
            variant="dark"
            onClick={handleCloseModal}
            className="outfit-modal-button"
          >
            Submit
          </Button>
        }
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
