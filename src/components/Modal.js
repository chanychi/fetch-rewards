import './Modal.css';

function Modal ({setShowModal}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Your account was successfully created!</p>
                <button onClick={() => setShowModal(false)}>Close</button>
            </div>
      </div>
    )
}

export default Modal;