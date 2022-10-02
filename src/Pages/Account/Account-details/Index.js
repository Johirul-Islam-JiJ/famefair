import React, { useEffect, useState } from 'react';
import '../../../styles/Account/account-details.scss';
import { useForm } from "react-hook-form";
import Icon from 'react-icons-kit';
import { ic_perm_media } from 'react-icons-kit/md';
import axios from 'axios';
import { apiURL } from '../../../utils/apiURL';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)

    // Header 
    const header = {
        headers:
        {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
        }
    }

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'))
        setUser(loggedUser)
    }, [])

    // Fetch Loggedin User
    const fetchLoggedUser = async () => {
        try {
            const response = await axios.get(`${apiURL}me`, header)
            localStorage.setItem('user', JSON.stringify(response.data))
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    const onSubmit = async (data) => {
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone_number', data.phone_number)
        formData.append('image', selectedFile)

        try {
            setLoading(true)
            const response = await axios.post(`${apiURL}user/update/account`, formData, header)
            if (response.status === 200) {
                fetchLoggedUser()
                setLoading(false)
                toast.success('Profile successfully updated.')
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                console.log(error.response)
            }
        }
    }


    return (
        <div className="account-details">
            <div className="header text-center mt-3">
                <h5>account details</h5>
            </div>

            <div className="body mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        {/* Name */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.name && errors.name.message ? (
                                    <p className="text-danger">{errors.name && errors.name.message}</p>
                                ) : <p className="text-muted">Name*</p>
                                }

                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user.name}
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Name is required*",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.phone_number && errors.phone_number.message ? (
                                    <p className="text-danger">{errors.phone_number && errors.phone_number.message}</p>
                                ) : <p className="text-muted">Phone number*</p>
                                }

                                <input
                                    type="number"
                                    name="phone_number"
                                    defaultValue={user.phone_number}
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Phone number is required*"
                                    })}
                                />
                            </div>
                        </div>

                        {/* E-mail */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <p className="text-muted">E-mail</p>
                                <input
                                    type="text"
                                    name="email"
                                    defaultValue={user.email}
                                    className="form-control rounded-0 shadow-none"
                                    readOnly
                                />
                            </div>
                        </div>


                        {/* Image Box */}
                        <div className="col-12 text-center my-4 pb-2">
                            <div className="box">

                                <div className="d-flex flex-box">
                                    {user.image ?
                                        <div className="img-box rounded-circle">
                                            <img src={user.image} className="img-fluid" alt="..." />
                                        </div> : null}

                                    {selectedFile ?
                                        <div className="img-box rounded-circle">
                                            <img src={previewURL} className="img-fluid" alt="..." />
                                        </div>
                                        :
                                        <div className="fileUpload rounded-circle border">
                                            <div className="flex-center flex-column">
                                                <input type="file" className="upload" onChange={imageChangeHandeller} />
                                                <span><Icon icon={ic_perm_media} size={50} style={{ color: "#555" }} /></span>
                                            </div>
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <button type="submit" className="btn rounded-0 shadow-none">
                                {isLoading ? <span>saving...</span> : <span>save changes</span>}
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;