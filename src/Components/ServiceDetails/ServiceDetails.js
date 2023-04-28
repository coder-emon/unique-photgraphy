import { Card, Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/Auth.Context';
import StartRating from '../StarRating/StarRating';
import { toast } from 'react-hot-toast';

const ServiceDetails = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [service, setService] = useState({})
    const [reviews, setReviews] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setIsUpdate(false)
            })
    }, [id, isUpdate])

    const { _id, title, description, imgurl, price, avgRating } = service
    const dateNum = new Date().getTime()
    const dateFull = new Date()
    let sum
    let SumAvgRating = {}
    if(reviews){
         sum = reviews.map(item => item.rating).reduce((prev, next) => prev + next, 0);
         SumAvgRating = {
            avgRating:Number(sum / reviews.length).toFixed(1)
         }
    }
    const handleReview = (e) => {
        e.preventDefault()
        if(!user){
            navigate("/login")
            toast.error("Please login to add review")
            return 
        }
        setIsUpdate(true)
        const form = e.target
        const review_description = form.description.value
        const reviewDetails = {
            service_id: _id,
            service_title: title,
            review_description,
            username: user?.displayName,
            usermail: user?.email,
            userimg: user?.photoURL,
            rating,
            dateNum,
            dateFull

        }
        fetch("http://localhost:5000/reviews/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        fetch(`http://localhost:5000/service/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(SumAvgRating)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        form.reset()
    }
    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsUpdate(false)
                console.log(data);
            })
    }, [id,isUpdate])
    
   
    return (
        <div>
            <div className="">
                <Card


                >
                    <img src={imgurl} alt={title} className='object-cover w-8/12 mx-auto' />

                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p>{description}</p>
                    <div className="mt-2.5 mb-5 flex justify-between items-center">
                        <div className='flex'>
                           <StartRating stars={avgRating}></StartRating>
                            <span className="flex items-center mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                {avgRating ? avgRating : "0.0"}
                            </span>
                        </div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                    </div>
                    <div>
                        {reviews.map(review => <div key={review._id} className='flex justify-between items-center gap-5 border border-gray-300 p-3 rounded-md mb-5'>
                            <img src={review?.userimg} alt={review?.username} className='w-16  rounded-full ' />
                            <h3 className='w-4/12 text-center'>{review?.username}</h3>
                            <p className='w-5/12 text-justify'>{review?.review_description}</p>
                            <div className='flex items-center w-3/12'>
                                <StartRating stars={review?.rating}></StartRating>
                                <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 flex items-center justify-center w-6">
                                    {review?.rating}
                                </span>
                            </div>
                        </div>)}
                    </div>
                    <form onSubmit={handleReview} className='flex flex-col gap-5'>
                        <div className="flex items-center justify-between gap-5">

                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Give a review"
                                    />
                                </div>
                                <Textarea
                                    id="description"
                                    name='description'
                                    placeholder="Leave a description..."
                                    required={true}
                                    rows={4}
                                    cols={100}


                                />
                            </div>
                            <div className='flex flex-col justify-between gap-3'>
                                <h2 className='text-sm font-bold'>Give a rating</h2>
                                <div className='flex items-center'>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;
                                        return (
                                            <label >
                                                <input className='hidden' type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                                                <FaStar className='cursor-pointer text-3xl' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} color={(ratingValue <= hover) || (ratingValue <= rating) ? "ffc107" : "e4e5e9"} />
                                            </label>
                                        )
                                    })}
                                    <p>
                                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 flex items-center justify-center w-6">
                                            {rating ? rating : 0}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button

                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type='submit'

                        >
                            Submit Review
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default ServiceDetails;