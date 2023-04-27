import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = ({ quantity }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services?quantity=${quantity}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <h1 className='text-center text-5xl font-bold mb-5'>My Services</h1>
            <div className='grid grid-cols-3 container mx-auto gap-5'>
                {services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)}
            </div>
        </>
    );
};

export default Services;