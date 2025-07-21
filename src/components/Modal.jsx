import Button from "./Button"
function Modal({ submitted, rating, handleOnClose }) {
    return (
        <>
            {submitted && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Thank you!</h2>
                        <p>
                            You rate us {rating} star{rating > 1 ? "s" : ""}
                        </p>
                        <Button className="close-btn" onClick={handleOnClose}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
