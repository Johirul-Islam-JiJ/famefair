import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../../styles/Account/account-details.scss';
import axios from 'axios';
import { apiURL } from '../../../utils/apiURL';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 2000 })
const PasswordChange = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Header 
    const header = {
        headers:
        {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    const onSubmit = async (data) => {
        const loggedUser = JSON.parse(localStorage.getItem('user'))
        try {
            setLoading(true)
            const response = await axios.post(`${apiURL}user/update/${loggedUser.id}/password`, data, header)
            if (response.status === 200) {
                setLoading(false)
                toast.success('Password successfully updated.')
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                toast.warn(error.response.data.message)
            }
        }
    }


    return (
        <div className="password-cahnge">
            <div className="header"></div>

            <div className="body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* Password Change */}
                        <div className="col-12 mt-3 mb-4">
                            <div className="card rounded-0">
                                <div className="title">
                                    <p className="mb-0">password change</p>
                                </div>
                                <div className="card-body">

                                    {/* old Password */}
                                    <div className="form-group mb-3">
                                        {errors.old_password && errors.old_password.message ? (
                                            <p className="text-danger">{errors.old_password && errors.old_password.message}</p>
                                        ) : <p className="text-muted">Old password*</p>
                                        }

                                        <input
                                            type="password"
                                            name="old_password"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "Old password is required"
                                            })}
                                        />
                                    </div>

                                    {/* New Password */}
                                    <div className="form-group mb-3">
                                        {errors.new_password && errors.new_password.message ? (
                                            <p className="text-danger">{errors.new_password && errors.new_password.message}</p>
                                        ) : <p className="text-muted">New password*</p>
                                        }

                                        <input
                                            type="password"
                                            name="new_password"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "New password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "Minimun length 8 character"
                                                }
                                            })}
                                        />
                                    </div>

                                    <button type="submit" className="btn rounded-0 shadow-none mt-3">
                                        {isLoading ? <span>saving...</span> : <span>save changes</span>}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordChange;