import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import ImageModal from "./ImageModal";
import AppContext from "../../contexts/AppContext";
import UploadImage from "../../assets/images/outfitGenerator/upload.svg";

const ImageUploader = () => {
  const {
    setClothType,
    setShowModal,
    setIsUploaded,
    selectedImages,
    setSelectedImages,
  } = useContext(AppContext);

  // Function to show the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle image upload
  const handleImageChange = (e, category) => {
    e.preventDefault();
    const files = e.target.files;
    setSelectedImages({...selectedImages, [category]: [...selectedImages[category], ...files]});
    setClothType(category);
    handleShowModal();
    setIsUploaded(true);
  };

  return (
    <Col className="text-center outfit-upload">
      <img
        width="66.20px"
        height="66.20px"
        src={UploadImage}
        alt="Upload Icon"
      />
      <Dropdown>
        <Dropdown.Toggle
          variant="link"
          id="dropdown-basic"
          className="outfit-text"
        >
          Upload Image
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            className="text-center item-dropdown-menu"
          >
            <label htmlFor="dress-input">Dress</label>
            <input
              hidden
              multiple
              type="file"
              accept="image/*"
              id="dress-input"
              onChange={(e) => handleImageChange(e, "DRESS")}
            />
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            href="#/action-2"
            className="text-center item-dropdown-menu"
          >
            <label htmlFor="top-input">Tops</label>
            <input
              hidden
              multiple
              type="file"
              id="top-input"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "TOP")}
            />
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            href="#/action-2"
            className="text-center item-dropdown-menu"
          >
            <label htmlFor="bottoms-input">Bottoms</label>
            <input
              hidden
              multiple
              type="file"
              accept="image/*"
              id="bottoms-input"
              onChange={(e) => handleImageChange(e, "BOTTOM")}
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Category selection modal */}
      <ImageModal />
    </Col>
  );
};

export default ImageUploader;
