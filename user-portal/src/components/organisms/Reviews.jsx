import { getData,postData,deleteData } from "../../services/api";
import { useNavigate, useParams } from 'react-router-dom';
import RatingBtn from "../atoms/RatingBtn";
import CustomerPhotos from "../molecules/CustomerPhotos";
import CustomerReviews from "../molecules/CustomerReviews";
import Para from '../atoms/Para'
import InputTag from "../atoms/InputTag";
import Button from '../atoms/Button'
import ReactStars from 'react-stars'
import { useEffect, useState } from "react";
import Atag from "../atoms/Atag";

function Reviews() {

    let user = localStorage.getItem('userData')
    let username = JSON.parse(user)
    const { id } = useParams();
    const [star,setSar]=useState(0)
    const [comment,setComment] = useState("")
    const [review, setReview] = useState()
    const [postedReview, setPostedReview] = useState([])
    const [showAll,setShowAll] = useState(false)
    const navigate = useNavigate()
    let values ={"productId":id,"comment":comment,"rating":star,"customerName":username?username.firstName:"guest"}
    // const tempid = JSON.parse(localStorage.getItem('tempId'))
    const limit = 5

    function islogin(){
        if(!user){
navigate('/login')
        }
    }

    async function func() {

        try {
            const reviews = await getData(`/review/allReview/${id}`)
            setReview(reviews?.review)
            const arr =[]
            reviews?.review?.map((ele,index)=>{
                // if(ele.customerName===username.firstName){
                    arr.push(ele)
                    setPostedReview(arr)
                // }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function submit(v) {
        try {
            const submittedReview = await postData('/review',v)
            func()
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteReview(id) {
        try {
            await deleteData(`/review/${id}`)
            func()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        func()

    }, [])

    const ratingChanged = (newRating) => {
        setSar(newRating)
      }

    function userReview(e){
        setComment(e.target.value)
    }

    return (

        <div>
            {/* {console.log("review::::",review)} */}
            {/* <Para para="rating and reviews" className="text-uppercase font-weight-bold" />
            <Para para="customer photos" className="text-uppercase font-weight-bold" />
            <div className="row">
                <CustomerPhotos />
            </div> */}
            <Para para="customer reviews" className="text-uppercase font-weight-bold" />
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            color1='#c0c0c0'
            color2={'#00a300'} 
            className="mb-2"/>
            <InputTag type="text" placeholder="write your review here...." className="mb-2 mr-2" onChange={(e)=>userReview(e)}/>
<Button type="submit" className="submit-btn btn btn-warning text-uppercase text-white mb-1" buttonText="submit" onClick={()=>{submit(values);islogin()}}/>

            {
                showAll && values?
                review?.map((rev, index) => {
                    if(rev?.comment){
                    return (
                        <div className="row" key={index}>
                            <div className="col-1">
                                <RatingBtn star={rev?.rating} />
                            </div>
                            <div className="col-11">
                                <CustomerReviews review={rev} name={username?username.firstName:"guest"} func={()=>{deleteReview(postedReview?.[index]?._id)}}/>
                            </div>
                        </div>
                    )
                    }
                    return ""
                })
                :
                review?.slice(0,5)?.map((rev, index) => {
                    if(rev?.comment){
                    return (
                        <div className="row" key={index}>
                            <div className="col-1">
                                <RatingBtn star={rev?.rating} />
                            </div>
                            <div className="col-11">
                                <CustomerReviews review={rev} name={username?username.firstName:"guest"} func={()=>{deleteReview(postedReview?.[index]?._id)}}/>
                            </div>
                        </div>
                    )
                    }
                    return ""
                })
            }
        <hr/>
        {
            showAll && review?.length > 5
        ?<Atag className="review-link font-weight-bold" aText="View less" onClick={()=>setShowAll(false)}/>:
        review?.length >5?<Atag className="review-link font-weight-bold" aText="View all reviews" onClick={()=>setShowAll(true)}/>:""
        }
        </div>
    )
}

export default Reviews