import React, { useState } from 'react';
import '../../styles/contact.scss';
import { Icon } from 'react-icons-kit';
import { ic_phone, ic_markunread, ic_location_on } from 'react-icons-kit/md';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(`${apiURL}website/message/send`, data)
            if (response.status === 200) {
                setLoading(false)
                toast.success('Thank you. we recived your message.')
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                console.log(error.response)
            }
        }
    }


    return (
        <div className="contact">
            <NavbarComponent />

            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>contact informations</h1>
                    </div>
                </div>
            </div>

            {/* Contact Main */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        {/* Contact Utilities */}
                        <div className="col-12 col-lg-4 contact-utilities mb-4 mb-lg-0">

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_phone} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>phone number</p>
                                            <small>+8801918836801 </small>
                                            <br />
                                            <small>+8801886455239 </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_markunread} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>email address</p>
                                            <small>urfashionbd@gmail.com</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={printer} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>fax address</p>
                                            <small>+0123 4567 9876</small>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_location_on} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>location</p>
                                            <small>
                                                35/A Purana Palton Line (V I P Road, Opposite of Ananda Bhoban- near City Bank), 1000 Dhaka, Dhaka Division, Bangladesh</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Contact form */}
                        <div className="col-12 col-lg-8 contact-form">
                            <div className="card border-0">
                                <div className="card-header border-0 bg-white p-4 pb-0">
                                    <h4 className="pt-2">Send Message</h4>
                                    <p className="text-muted mb-0">if you have any query, feel free to contact with us. </p>
                                </div>
                                <div className="card-body p-4">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">

                                            {/* Name */}
                                            <div className="col-12 col-lg-6 pr-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={errors.name ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Your name"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* E-mail */}
                                            <div className="col-12 col-lg-6 pl-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className={errors.email ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Email address"
                                                        ref={register({
                                                            required: true,
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="col-12 col-lg-6 pr-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className={errors.phone ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Phone number"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="col-12 col-lg-6 pl-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className={errors.subject ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Subject"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <textarea
                                                        type="text"
                                                        name="message"
                                                        className={errors.message ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Message"
                                                        rows="3"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn text-white shadow-none">
                                                    {isLoading ? <span>Sending...</span> : <span>Send Message</span>}
                                                </button>
                                            </div>




                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Map */}
            <div className="map-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h1>Find Us on Google Maps</h1>
                            {/* <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p> */}
                        </div>

                        <div className="col-12 map-column">
                            <iframe
                                title="Our locatin find in google map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.257081318259!2d90.40502811489523!3d23.73821019515897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x816956b392ce3069!2sUR%20Fashion!5e0!3m2!1sen!2sbd!4v1605769872590!5m2!1sen!2sbd" width="100%"
                                height="450"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />

        </div>
    );
};

export default Index;