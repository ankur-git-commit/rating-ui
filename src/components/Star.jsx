/* eslint-disable no-unused-vars */
function Star({ star, rating, hover, color, handleRatingClick, handleHoverIn, handleHoverOut }) {
    return (
        <span
            onClick={handleRatingClick}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className="star"
            style={{ color: star <= (hover || rating) ? color : "" }}
        >
            {"\u2605"}
        </span>
    )
}

export default Star
