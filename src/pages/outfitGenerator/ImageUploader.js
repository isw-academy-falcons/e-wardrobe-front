import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import UploadImage from "../../assets/images/outfitGenerator/upload.svg";

const ImageUploader = ({ handleImageChange, showModal, handleCategorySelection, handleCloseModal }) => {
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
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ImageUploader;
