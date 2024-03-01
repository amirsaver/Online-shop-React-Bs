import { useContext } from 'react';
import { sharedCtx } from './ctx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modall({handleClose, show, head, text}) {
//   const [show, setShow] = useState(showModal);
const {logout} = useContext(sharedCtx)
const handleLogOut = () => {
    logout();
    handleClose()
};

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{head} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="primary" onClick={() => handleLogOut()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;