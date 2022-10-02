import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const EditShippingAddress = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
    }


    return (
        <div className="edit">
            <div className="header text-center mt-3">
                <h5>my addresses</h5>
            </div>

            <div className="body mb-4">
                <div className="title">
                    <h5>Shippning Address</h5>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        {/* First Name */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.firstname && errors.firstname.message ? (
                                    <p className="text-danger">{errors.firstname && errors.firstname.message}</p>
                                ) : <p className="text-muted">First name*</p>
                                }

                                <input
                                    type="text"
                                    name="firstname"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "First name is required*",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.lastname && errors.lastname.message ? (
                                    <p className="text-danger">{errors.lastname && errors.lastname.message}</p>
                                ) : <p className="text-muted">Last name*</p>
                                }

                                <input
                                    type="text"
                                    name="lastname"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Last name is required*",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Company (Optional) */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <p className="text-muted">Company name (optional)</p>

                                <input
                                    type="text"
                                    name="company_name"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register}
                                />
                            </div>
                        </div>

                        {/* Country / Region */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.country_region && errors.country_region.message ? (
                                    <p className="text-danger">{errors.country_region && errors.country_region.message}</p>
                                ) : <p className="text-muted">Country / Region*</p>
                                }

                                <select
                                    name="country_region"
                                    className="form-control rounded-0 shadow-none pl-1"
                                    ref={register({
                                        required: "Country / Region is required*",
                                    })}
                                >

                                    <option value="bd">Bangladesh</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bd">Bangladesh</option>

                                </select>
                            </div>
                        </div>

                        {/* Street Address */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.street_address && errors.street_address.message ? (
                                    <p className="text-danger">{errors.street_address && errors.street_address.message}</p>
                                ) : <p className="text-muted">Street address*</p>
                                }

                                <input
                                    type="text"
                                    name="street_address"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Street address is required*",
                                    })}
                                />
                            </div>
                        </div>

                        {/* Town/City */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.town_city && errors.town_city.message ? (
                                    <p className="text-danger">{errors.town_city && errors.town_city.message}</p>
                                ) : <p className="text-muted">Town/City*</p>
                                }

                                <input
                                    type="text"
                                    name="town_city"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Town/City is required*",
                                    })}
                                />
                            </div>
                        </div>

                        {/* Postcode/ZIP (Optional) */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <p className="text-muted">Postcode/ZIP (optional)</p>

                                <input
                                    type="text"
                                    name="postcode_zip"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register}
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.phone && errors.phone.message ? (
                                    <p className="text-danger">{errors.phone && errors.phone.message}</p>
                                ) : <p className="text-muted">Phone*</p>
                                }

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Phone is required*",
                                        minLength: {
                                            value: 11,
                                            message: "Phone isn't valid"
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: "Phone isn't valid"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* E-mail */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <p className="text-danger">{errors.email && errors.email.message}</p>
                                ) : <p className="text-muted">E-mail address*</p>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "E-mail address is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-danger text-white rounded-0 shadow-none">
                                {isLoading ? <span>saving...</span> : <span>save address</span>}
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default EditShippingAddress;