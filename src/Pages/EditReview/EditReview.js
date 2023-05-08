import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Auth.Context';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Textarea } from 'flowbite-react';
import { toast } from 'react-hot-toast';

const EditReview = () => {
    const { user } = useContext(AuthContext)
    // const [review, setReview] = useState({})
    const review = useLoaderData()
    const [rating, setRating] = useState(review?.rating)
    const [hover, setHover] = useState(null)
    const [service, setService] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/service/${review?.service_id}`)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    }, [])
    const { _id, title,  imgurl, price, avgRating } = service
    console.log(service)
    const dateNum = new Date().getTime()
    const dateFull = new Date()
    const hanleUpdateReview = (e) => {
        e.preventDefault()
        
        if(!user){
            navigate("/login")
            toast.error("Please login to add review")
            return 
        }
        
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
        fetch(`http://localhost:5000/single-review/${id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
            })
    }
    console.log(review)
    return (
        <div className='container mx-auto'>
           <form onSubmit={hanleUpdateReview} className='flex justify-between items-center gap-5 border border-gray-300 p-3 rounded-md mb-5'>
                    <img src={review?.userimg} alt={review?.username} className='w-16  rounded-full ' />
                    <h3 className='w-4/12 text-center'>{review?.username}</h3>
                    <Link to={`/service/${review.service_id}`} className='w-3/12 flex flex-col justify-center items-center border p-3'>
                        <h3 className='text-xl font-bold mb-2'>{title}</h3>
                        <img  className='w-36' src={imgurl} alt="" />
                        <p >Price: TK {price}</p>
                    </Link>
                    <div className='w-3/12 text-justify'>
                    <Textarea
                                    id="description"
                                    name='description'
                                    defaultValue={review?.review_description}
                                    placeholder="Leave a description..."
                                    required={true}
                                    rows={3}
                                    cols={40}


                                />    
                    </div>
                    <div className='flex items-center w-3/12'>
                    <div className='flex items-center'>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;
                                        return (
                                            <label >
                                                <input className='hidden' type="radio" name="rating" value={ratingValue ? ratingValue : review?.rating} onClick={() => setRating(ratingValue)} />
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
                    <button

                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type='submit'

                        >
                            Update
                        </button>
                </form>
        </div>
    );
};

export default EditReview;