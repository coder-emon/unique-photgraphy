import { Card } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StartRating from '../StarRating/StarRating';

const ServiceItem = ({ service }) => {
    const { _id, title, description, imgurl, price, avgRating } = service
    
    return (
        <div>
            <div className="max-w-sm max-h-sm">
                <Card


                >
                    <img src={imgurl} alt={title} className='object-cover h-44' />

                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p>{description.slice(0, 100)}...</p>
                    <div className="mt-2.5 mb-5 flex items-center">
                    <StartRating stars={avgRating}></StartRating>
                            <span className="flex items-center mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {avgRating ? avgRating : "0.0"}
                            </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                        <Link
                            to={`http://localhost:3000/service/${_id}`}
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Details
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ServiceItem;