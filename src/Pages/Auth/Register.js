import React, { useState } from 'react';
import '../../styles/auth.scss';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../../assets/static/logo.png';

toast.configure({ autoClose: 2000 })
const Register = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)
    const [serverErrors, setServerErrors] = useState({})

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(`${apiURL}register`, data)
            if (response.data.status === true) {
                toast.success(response.data.message)
                setLoading(false)
                history.push('/sign-in')
            }
            if (response.data.status === false) {
                toast.warn(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            if (error && error.response.status === 422) {
                setServerErrors(error.response.data.message)
            }
        }
    }


    return (
        <div className="Auth">
            <div className="flex-center flex-column">

                <div className="text-center logo-box">
                    <Link to="/">
                        <img src={Logo} className="img-fluid" alt="..." />
                    </Link>
                </div>

                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-1">Sign-Up</h4>
                        <p className="text-danger mb-0">
                            {serverErrors.email ? serverErrors.email[0] : null}
                            {serverErrors.phone_number ? serverErrors.phone_number[0] : null}
                        </p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <div className="form-group mb-3">
                                {errors.name && errors.name.message ? (
                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                ) : <small>Name</small>
                                }

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control shadow-none"
                                    placeholder="Your name"
                                    ref={register({
                                        required: "Name is required",
                                        minLength: {
                                            value: 8,
                                            message: "Minimun length 8 character"
                                        }
                                    })}
                                />
                            </div>

                            {/* E-mail */}
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="example@gmail.com"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            {/* Phone number */}
                            <div className="form-group mb-3">
                                {errors.phone_number && errors.phone_number.message ? (
                                    <small className="text-danger">{errors.phone_number && errors.phone_number.message}</small>
                                ) : <small>Phone number</small>
                                }

                                <input
                                    type="text"
                                    name="phone_number"
                                    className="form-control shadow-none"
                                    placeholder="01*********"
                                    ref={register({
                                        required: "Phone number is required"
                                    })}
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group mb-3">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control shadow-none"
                                    placeholder="*****"
                                    ref={register({
                                        required: "Please enter password",
                                        minLength: {
                                            value: 8,
                                            message: "Minimun length 8 character"
                                        }
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">
                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                            </button>

                        </form>

                        <div className="text-right mt-1">
                            <p>Already have an account ? <Link to="/sign-in">Sign-in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;