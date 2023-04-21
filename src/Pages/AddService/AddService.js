import React, { useContext } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { AuthContext } from '../../Context/Auth.Context';
const AddService = () => {
    const { user } = useContext(AuthContext)
    const handleAddServices = (e) => {
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
            email: user.email,
            username: user.displayName
        }
        console.log(service);
        fetch("http://localhost:5000/services/", {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(service)
        })
        form.reset()
    }
    return (
        <div>
            <div className='w-6/12 mx-auto bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-3xl text-center text-gray-900'>Add a service</h1>
                <form className="flex flex-col gap-4" onSubmit={handleAddServices}>
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
                                    value={user.email}
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
                                    placeholder="Service Price"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit">
                        Add Service
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default AddService;