import { Carousel } from 'flowbite-react';
import React, { useEffect } from 'react';
import Services from '../../Components/Services/Services';
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = () => {
    useEffect(()=>{
        document.title = 'Unique Photography | Home'  
    }, [])
    return (
        <div>
            <div className='flex items-center container mx-auto py-32'>
                <div className='w-6/12 pr-36'>
                    <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-800'>
                        Capture your
                        <br />
                        <span className='text-gradient'>beautiful</span>
                        <br />
                        moments with us
                    </h1>
                    <p className='text-xl'>
                    Everyone wants to keep their memorable day as a photo. If it is a wedding and engagement ceremony, then there is no space to talk about it. So lets colabrate with me and capture the beautiful moments.
                    </p>
                    <Link to="/services">
                    <button className='btn px-3 py-3 bg-teal-300 rounded-md mt-3 text-gray-900 font-bold'>Explore Services</button>
                    </Link>
                </div>
                <div className='w-6/12'>
                    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
                        <Carousel>
                            <img
                                src="https://www.thephotoargus.com/wp-content/uploads/2021/04/young_Creative-photography-ideas_05_BEFORE-1024x686.jpeg"
                                className='h-96 object-cover'
                                alt="..."
                            />
                            <img
                                src="https://ipt.imgix.net/201678/x/0/ultimate-guide-to-landscape-photography-28?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
                                alt="..."
                                className='h-96 object-cover'
                            />
                            <img
                                src="https://www.maxfosterphotography.com/images/xl/Rise-Above.jpg"
                                alt="..."
                                className='h-96 object-cover'
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"
                                alt="..."
                                className='h-96 object-cover'
                            />
                            <img
                                src="https://www.ontarioparks.com/parksblog/wp-content/uploads/2021/05/Rondeau_WhiteTailedDeer-1-825x510.jpg"
                                alt="..."
                                className='max-h- object-cover'
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
            <Services quantity={3}></Services>
            <div className='flex items-center justify-center  py-6'>
                <Link
                    to={`http://localhost:3000/services/`}
                    className="rounded-lg bg-slate-500   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    See All
                </Link>
            </div>

        </div>
    );
};

export default Home;