import React from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
const AddService = () => {
    return (
        <div>
            <div className='w-6/12 mx-auto bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-3xl text-center text-gray-900'>Add a service</h1>
                <form className="flex flex-col gap-4">
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
                                    type="text"
                                    placeholder="Type your email"
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
                                    id="email1"
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
                                        value="Your message"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    placeholder="Leave a comment..."
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
                                    type="number"
                                    placeholder="Service Price"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit">
                        Register
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default AddService;