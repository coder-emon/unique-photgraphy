import React, { useContext, useEffect, useState } from 'react';
import MyServiceItem from '../../Components/MyServiceItem/MyServiceItem';
import { AuthContext } from '../../Context/Auth.Context';

import Swal from 'sweetalert2';
import Notiflix, { Confirm } from 'notiflix';
import { toast } from 'react-hot-toast';


const MyServices = () => {
    const { user, logout } = useContext(AuthContext)
    const [services, setServices] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    
    useEffect(() => {
        document.title = "Unique Photography | My Services"
        fetch(`http://localhost:5000/servicesbyemail?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem("up-token")}`
            }
        })
            .then(res => {
                if(res.status == "401" || res.status == "403"){
                return logout()
                }
                return res.json()
            })
            .then(data => {
                setServices(data)
                setIsUpdate(false)
            })
    }, [user?.email, isUpdate, logout])
    const handleDelete = async(id, title ) =>{
        setIsUpdate(true)
        // const agree = window.confirm(`Are you sure you want to delete ${title}`)
        
            Confirm.show(
              "Please Confirm!",
              `Are you sure you want to delete ${title}`,
              "Yes",
              "No",
              () => {
                toast.success("Delete Confirmed");
                fetch(`http://localhost:5000/service/${id}`,{
                    method:"DELETE",
                    headers:{
                    authorization:`Bearer ${localStorage.getItem("up-token")}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsUpdate(true)
    
                })
              },
              () => {
                toast.success("Delete Cancelled");
              },
              {
                width: "320px",
                borderRadius: "8px",
                titleColor: "#03045e",
                okButtonBackground: "#03045e",
                cssAnimationStyle: "zoom",
              }
            )
    }
    return (
        <>
            <h1 className='text-center text-5xl font-bold mb-5'>My Services</h1>   
            <div className='grid grid-cols-3 container mx-auto gap-5'>
                {services?.map(service => <MyServiceItem key={service._id} handleDelete={handleDelete} service={service}></MyServiceItem>)}
            </div>
        </>
    );
};

export default MyServices;