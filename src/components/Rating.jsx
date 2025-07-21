/* eslint-disable no-unused-vars */
import { useState } from "react"
import Star from "./Star"
import Modal from "./Modal"
import Button from "./Button";

function Rating({
    heading = "Rate your Experience",
    color = "gold",
    feedbackMessage = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const stars = Array.from({ length: 5 }, (_, index) => index + 1)

    const handleSubmit = () => {
        if (rating > 0) {
            return setSubmitted(true)
        }
    }

    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
        setHover(0)
    }

    // const clicked = (index) => console.log("Clicked!", index)
    // const hovered = (direction, index) => console.log("Hovered!", direction , index)
    // const feedbackMessage = ["Terrible", "Poor", "Fair", "Good", "Excellent"]

    return (
        <div className="rating-container">
            <h2>{heading}</h2>
            {/* <p>{hover}</p> */}
            <div className="stars">
                {stars.map((star) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        testFunction={() => console.log("Test")}
                        handleRatingClick={() => setRating(star)}
                        handleHoverIn={() => {
                            console.log("Entering", star)
                            return setHover(star)
                        }}
                        handleHoverOut={() => {
                            console.log("Leaving", star)
                            return setHover(0)
                        }}
                    />
                ))}
            </div>
            {rating > 0 && (
                <p className="feedback">{feedbackMessage[rating - 1]}</p>
            )}

            <Button
                className='submit-btn'
                onClick={handleSubmit}
                disabled={rating === 0}
            >
                SUBMIT
            </Button>
            

            <Modal
                submitted={submitted}
                rating={rating}
                handleOnClose={closeModal}
            />
        </div>
    )
}

export default Rating
