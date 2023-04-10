import Para from '../atoms/Para'
import Span from '../atoms/Span'
import { FaTrashAlt } from 'react-icons/fa';
import RatingBtn from '../atoms/RatingBtn';
// import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri";
// import { useState } from 'react';
function CustomerReviews(props) {

    const { review, name,func } = props

    // const [thumbup, setThumbup] = useState(0)
    // const [thumbdown, setThumbdown] = useState(0)

    return (
        <div>
            <RatingBtn star={review?.rating} />
            <Para para={review.comment} />
            <div className="d-flex justify-content-between">
                <div>
                    <Span para={review?.customerName + "|" + review?.date} className="text-secondary" />
                </div>
                <div className='mr-5'>
                    {
                        name === review?.customerName ? 
                        <Span para={<FaTrashAlt />} className="text-secondary mr-1" onClick={func} /> 
                        : ""
                    }
                    {/* <Span para={<RiThumbDownFill />} className="text-secondary" onClick={() => setThumbdown(thumbdown + 1)} />
                    <Span para={thumbdown} className="text-secondary mr-3" />
                    <Span para={<RiThumbUpFill />} className="text-secondary" onClick={() => setThumbup(thumbup + 1)} />
                    <Span para={thumbup} className="text-secondary " /> */}
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews