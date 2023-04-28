import React, { useContext, useEffect, useState } from 'react';
import MyServiceItem from '../../Components/MyServiceItem/MyServiceItem';
import { AuthContext } from '../../Context/Auth.Context';


const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    
    useEffect(() => {
        fetch(`http://localhost:5000/servicesbyemail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsUpdate(false)
            })
    }, [user?.email, isUpdate])
    const handleDelete = (id, title ) =>{
        setIsUpdate(true)
        const agree = window.confirm(`Are you sure you want to delete ${title}`)
        console.log(agree)
        if(agree){
            fetch(`http://localhost:5000/service/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        }
    }
    return (
        <>
            <h1 className='text-center text-5xl font-bold mb-5'>My Services</h1>
            <div className='grid grid-cols-3 container mx-auto gap-5'>
                {services.map(service => <MyServiceItem key={service._id} handleDelete={handleDelete} service={service}></MyServiceItem>)}
            </div>
        </>
    );
};

export default MyServices;