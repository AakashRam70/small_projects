import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
export default function StarRating(noOfStars = 5) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleOnClick(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleOnMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleonMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        onClick={() => handleOnClick(index)}
                        onMouseEnter={() => handleOnMouseEnter(index)}
                        onMouseLeave={() => handleonMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
    )
}