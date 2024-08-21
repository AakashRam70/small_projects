
// import { useState } from "react"
import { FaStar } from "react-icons/fa"
export default function starRating({ noOfStars = 5 }) {

    // const [rating, setRating] = useState(0)
    // const [hover, setHover] = useState(0)

    function handleOnClick(getCurrent) {

    }
    function handleMouseEnter(getCurrent) {

    }

    function handleMouseLeave(getCurrent) {

    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {

                    index += 1;

                    return
                    <FaStar
                        key={index}
                        onClick={() => handleOnClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
    )
}