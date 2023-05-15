import React, { useContext, useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import Preloader from '../Preloader/Preloader';
import { AuthContext } from '../../Context/Auth.Context';

const Services = ({ quantity }) => {
    const [services, setServices] = useState([])
    const {loading, setLoading} = useContext(AuthContext)
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/services?quantity=${quantity}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            document.title = "Unique Photography | Services"
    }, [])
    if(loading){
        return <Preloader></Preloader>
    }
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