import React, { useContext, useEffect, useState } from 'react';
import MyServiceItem from '../../Components/MyServiceItem/MyServiceItem';
import { AuthContext } from '../../Context/Auth.Context';


const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/servicesbyemail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user?.email])

    return (
        <>
            <h1 className='text-center text-5xl font-bold mb-5'>My Services</h1>
            <div className='grid grid-cols-3 container mx-auto gap-5'>
                {services.map(service => <MyServiceItem key={service._id} service={service}></MyServiceItem>)}
            </div>
        </>
    );
};

export default MyServices;