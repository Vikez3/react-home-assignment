import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  modalShow: boolean;
  handleCloseModal: () => void;
  handleRemoveData: () => void;
}

function DeleteModal({ modalShow, handleCloseModal, handleRemoveData }: Props) {
  return (
    <>
      <Modal show={modalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure you want to delete this recipe.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemoveData}>
            Remove recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
