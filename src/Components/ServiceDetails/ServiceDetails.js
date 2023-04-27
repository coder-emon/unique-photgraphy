import { Card, Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/Auth.Context';
import StartRating from '../StarRating/StarRating';

const ServiceDetails = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [service, setService] = useState({})
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const { _id, title, description, imgurl, price } = service
    const date = new Date().getTime()
    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target
        const review_description = form.description.value
        const reviewDetails = {
            service_id: _id,
            service_title: title,
            review_description,
            username: user.displayName,
            usermail: user.email,
            userimg: user.photoURL,
            rating,
            date

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

        form.reset()
    }
    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [id])
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
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                5.0
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