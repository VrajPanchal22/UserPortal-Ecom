import { FaStar } from "react-icons/fa";

function RatingBtn(props){
    const {star} = props
return(
    <button className="d-flex align-items-center btn btn-success">{star}<FaStar className="mb-1"/></button>
)
}

export default RatingBtn