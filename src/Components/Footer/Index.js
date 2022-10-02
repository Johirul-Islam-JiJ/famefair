import React, { useState } from 'react';
import '../../styles/footer.scss';
import { Icon } from 'react-icons-kit';
import {
    facebook,
    instagram
} from 'react-icons-kit/icomoon'
import Logo from '../../assets/static/logo.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(`${apiURL}website/subscribe`, data)
            if (response.status === 200) {
                toast.success(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                toast.warn(error.response.data.message)
            }
        }
    }

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3 text-center text-lg-left pr-lg-5">
                        <img src={Logo} className="img-fluid" alt="..." />
                        <p>UR Fashion is committed to provide best quality product for customers and keep fast delivery service.</p>
                        <ul>
                            {/* <li><a href="https://www.facebook.com/"><Icon icon={user} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={earth} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={twitter} size={20} /></a></li> */}
                            <li><a href="https://www.facebook.com/urfashion21"><Icon icon={facebook} size={20} /></a></li>
                            <li><a href="https://www.instagram.com/urfasshion21"><Icon icon={instagram} size={19} /></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <h5>my account</h5>
                        <div><Link to="/sign-in" type="button" className="btn shadow-none rounded-0">my account</Link></div>
                        <div><Link to="/checkout" type="button" className="btn shadow-none rounded-0">checkout</Link></div>
                        <div><Link to="/terms-conditions" type="button" className="btn shadow-none rounded-0">Terms & Conditions</Link></div>
                        <div><Link to="/privacy-policy" type="button" className="btn shadow-none rounded-0">Privacy Policy</Link></div>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <h5>customer service</h5>
                        <div><Link to="/showroom" type="button" className="btn shadow-none rounded-0">showroom</Link></div>
                        <div><Link to="/about-us" type="button" className="btn shadow-none rounded-0">about us</Link></div>
                        <div><Link to="/returns-policy" type="button" className="btn shadow-none rounded-0">Returns Policy</Link></div>
                        <div><Link to="/faq" type="button" className="btn shadow-none rounded-0">faq</Link></div>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left mb-0">
                        <h5>stay connected</h5>
                        <p>Subscribe to our Newsletter and get our best offers update.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    name="email"
                                    className={errors.email ? "form-control rounded-0 shadow-none danger-border" : "form-control rounded-0 shadow-none"}
                                    placeholder="Enter email address"
                                    ref={register({
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        }
                                    })}
                                />
                            </div>
                            <button type="submit" className="btn btn-block submit-btn shadow-none rounded-0">
                                {isLoading ? <span>joinning...</span> : <span>join newsletter</span>}
                            </button>
                        </form>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="boder"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;