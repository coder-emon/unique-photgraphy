import { Carousel } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div className='flex items-center container mx-auto py-32'>
            <div className='w-6/12'>
                <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-800'>
                    Capture your
                    <br />
                    <span className=''>beautiful</span>
                    <br />
                    moments with us
                </h1>
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
    );
};

export default Home;