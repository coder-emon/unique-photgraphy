import React, { useContext, useEffect, useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { AuthContext } from '../../Context/Auth.Context';
import { useParams } from 'react-router-dom';
const EditService = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [service, setService] = useState({})
    const handleEditServices = (e) => {
        e.preventDefault()
        const form = e.target
        const imgurl = form.imgurl.value
        const title = form.title.value
        const description = form.description.value
        const price = form.price.value
        const service = {
            title,
            description,
            imgurl,
            price,
            email: user?.email,
            username: user?.displayName
        }
        console.log(service);
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const { title, description, imgurl, price } = service
    return (
        <div>
            <div className='w-6/12 mx-auto bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-3xl text-center text-gray-900'>Update Service</h1>
                <form className="flex flex-col gap-4" onSubmit={handleEditServices}>
                    <div className='flex  gap-4'>
                        <div className='w-6/12'>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="imgurl"
                                        value="Image Url"
                                    />
                                </div>
                                <TextInput
                                    id="imgurl"
                                    name="imgurl"
                                    type="text"
                                    defaultValue={imgurl}
                                    placeholder="Image URL"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="title"
                                        value="Service Title"
                                    />
                                </div>
                                <TextInput
                                    id="title"
                                    name="title"
                                    type="text"
                                    defaultValue={title}
                                    placeholder="Type your title"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email1"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    name='email'
                                    value={user?.email}
                                    readOnly={true}
                                    type="email"
                                    placeholder="Type your email"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='w-6/12'>
                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Your Description"
                                    />
                                </div>
                                <Textarea
                                    id="description"
                                    name='description'
                                    defaultValue={description}
                                    placeholder="Leave a description..."
                                    required={true}
                                    rows={4}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="price"
                                        value="Service Price"
                                    />
                                </div>
                                <TextInput
                                    id="price"
                                    name='price'
                                    type="number"
                                    defaultValue={price}
                                    placeholder="Service Price"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit">
                        Update Service
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default EditService;