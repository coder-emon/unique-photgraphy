import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Auth.Context';
import StartRating from '../../Components/StarRating/StarRating';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [user?.email])
    return (
        <div>
            <div className='container mx-auto'>
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
        </div>
    );
};

export default MyReviews;