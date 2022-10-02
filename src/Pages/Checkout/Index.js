import React, { useEffect, useState } from 'react';
import '../../styles/checkout.scss';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { productsList } from '../../Redux/Actions/cartAction';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';
import OrderStatusModal from '../../Components/Modal/OrderStatusModal';

import EmptyShoppingCartImg from '../../assets/static/empty_shopping_cart.png';


toast.configure({ autoClose: 2000 })
const Index = () => {
    let subTotal = 0
    const dispatch = useDispatch()
    const history = useHistory()
    let { cartProducts } = useSelector((state => state.products))
    const { register, handleSubmit, errors } = useForm()
    const [outSideDhaka, setOutSideDhaka] = useState(false)
    const [inSideDhaka, setInSideDhaka] = useState(false)
    const [shippingArea, setShippingArea] = useState()
    const [cashOnDelivery, setCashOnDelivery] = useState(true)
    const [loading, setLoading] = useState(false)
    const [shippingErr, setShippingErr] = useState(false)
    const [delivery_charge, setDelivery_charge] = useState('')
    const [isShow, setShow] = useState(false)
    const [checkResponseOutData, setCheckOutResponseData] = useState()
    const [orderCode, setOrderCode] = useState()
    const [couponInfo, setCouponInfo] = useState({})
    const [loggedUser, setLoggedUser] = useState({})


    useEffect(() => {
        dispatch(productsList())
        const getCoupon = async () => {
            const coupon = await JSON.parse(localStorage.getItem('couponData'))
            setCouponInfo(coupon)
        }
        let user = JSON.parse(localStorage.getItem('user'))
        setLoggedUser(user)
        getCoupon()
    }, [dispatch])

    const onChangeOutSideDhaka = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setOutSideDhaka(value)
        setInSideDhaka(false)
        setShippingArea(event.target.name)
        setDelivery_charge(120)
    }

    const onChangeInSideDhaka = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setOutSideDhaka(false)
        setInSideDhaka(value)
        setShippingArea(event.target.name)
        setDelivery_charge(60)
    }

    const countTotal = () => {
        if (couponInfo && couponInfo.type === 'percent') {
            const total = subTotal - (subTotal * (couponInfo.percent) / 100) + delivery_charge
            return total
        } else if (couponInfo && couponInfo.type === 'fixed') {
            const total = subTotal - couponInfo.amount + delivery_charge
            return total
        } else {
            return subTotal + delivery_charge
        }

    }

    const onSubmit = async (data) => {
        // Header 
        const header = {
            headers:
            {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }

        if (!shippingArea) {
            return setShippingErr(true)
        }

        const checkOutData = {
            id: loggedUser ? loggedUser.id : null,
            name: data.name,
            phone: data.phone,
            district: data.district,
            delivery_address: data.delivery_address,
            courier_name: data.courier_name,
            email: data.email,
            shipping_area: shippingArea,
            delivery_method: 'Cash on delivery',
            total_price: countTotal(),
            delivery_charge: delivery_charge,
            coupon_code: couponInfo ? couponInfo.code : null,
            discount: couponInfo && couponInfo.type === 'percent' ? couponInfo.percent : couponInfo && couponInfo.type === 'fixed' ? couponInfo.amount : null,
            discount_type: couponInfo ? couponInfo.type : null,
            products: cartProducts
        }

        console.log(checkOutData)

        // try {
        //     setLoading(true)
        //     const response = await axios.post(`${apiURL}website/confirmorder`, checkOutData, header)
        //     if (response.status === 200) {
        //         setCheckOutResponseData(checkOutData)
        //         setOrderCode(response.data)
        //         setShow(true)
        //         localStorage.removeItem('couponData')
        //         localStorage.removeItem('products')
        //     }
        // } catch (error) {
        //     if (error) {
        //         setLoading(false)
        //         localStorage.removeItem('couponData')
        //         console.log(error.response)
        //     }
        // }
    }

    const hideModal = () => {
        setShow(false)
        history.push('/')
    }

    return (
        <div className="checkout">
            <NavBarComponent />

            {cartProducts && cartProducts.length > 0 ?
                <div className="container pt-4 pb-4 pb-lg-5">
                    <div className="row">
                        <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                            <div className="checkout-header">
                                <h5 className="mb-0">
                                    <span className="text-muted">shopping cart/</span>
                                    <span className="text-black">checkout</span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* User Details */}
                            <div className="col-12 col-lg-7 user-details-column">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="title border-bottom mb-3">
                                            <h6 className="mb-2">billing details</h6>
                                        </div>

                                        {/* Input Fields */}
                                        <div className="input-fields">
                                            {/* Name */}
                                            <div className="form-group mb-3">
                                                {errors.name && errors.name.message ? (
                                                    <p className="text-danger">{errors.name && errors.name.message}</p>
                                                ) : <p className="text-muted">Name*</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="name"
                                                    defaultValue={loggedUser ? loggedUser.name : null}
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Name is required*"
                                                    })}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className="form-group mb-3">
                                                {errors.phone && errors.phone.message ? (
                                                    <p className="text-danger">{errors.phone && errors.phone.message}</p>
                                                ) : <p className="text-muted">Phone*</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="phone"
                                                    defaultValue={loggedUser ? loggedUser.phone_number : null}
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Phone is required*"
                                                    })}
                                                />
                                            </div>

                                            {/* District */}
                                            <div className="form-group mb-3">
                                                {errors.district && errors.district.message ? (
                                                    <p className="text-danger">{errors.district && errors.district.message}</p>
                                                ) : <p className="text-muted">District*</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="district"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "District is required*"
                                                    })}
                                                />
                                            </div>

                                            {/* Delivery Address */}
                                            <div className="form-group mb-3">
                                                {errors.delivery_address && errors.delivery_address.message ? (
                                                    <p className="text-danger">{errors.delivery_address && errors.delivery_address.message}</p>
                                                ) : <p className="text-muted">Delivery Address*</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="delivery_address"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Delivery Address is required*"
                                                    })}
                                                />
                                            </div>

                                            {/* Courier */}
                                            <div className="form-group mb-3">
                                                {errors.courier_name && errors.courier_name.message ? (
                                                    <p className="text-danger">{errors.courier_name && errors.courier_name.message}</p>
                                                ) : <p className="text-muted">Courier*</p>
                                                }

                                                <select
                                                    name="courier_name"
                                                    className="form-control shadow-none pl-1"
                                                    ref={register({
                                                        required: "Courier is required*"
                                                    })}
                                                >
                                                    <option value="sundarban_courier">সুন্দরবন কুরিয়ার</option>
                                                    <option value="kartua_courier">করতোয়া কুরিয়ার</option>
                                                    <option value="janani_courier">জননী কুরিয়ার</option>
                                                    <option value="dhaka_home_delivery">ঢাকা হোম ডেলিভারি</option>
                                                    <option value="s_a_paribahan">এস এ পরিবহন</option>
                                                </select>

                                            </div>

                                            {/* Email */}
                                            <div className="form-group mb-3">
                                                {errors.email && errors.email.message ? (
                                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                                ) : <p className="text-muted">Email Address</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="email"
                                                    defaultValue={loggedUser ? loggedUser.email : null}
                                                    className="form-control shadow-none"
                                                    placeholder="example@gmail.com"
                                                    ref={register({
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Invalid email address"
                                                        }
                                                    })}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cart Details */}
                            <div className="col-12 col-lg-5 mt-4 mt-lg-0 order-details">
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <div className="title border-bottom mb-3">
                                            <h6 className="mb-2">your order</h6>
                                        </div>

                                        {/* Cart Produucts */}
                                        <div className="cart-products">

                                            {cartProducts.length > 0 && cartProducts.map((product, i) =>
                                                <div className="product-single d-flex" key={i}>
                                                    <div>
                                                        <p>{product.name}</p>
                                                        <small>Quantity: {product.quantity}</small>
                                                    </div>
                                                    <div className="ml-auto pl-2">
                                                        <p>{product.price * product.quantity} tk.</p>
                                                    </div>
                                                    <div className="d-none">{subTotal += product.price * product.quantity}</div>
                                                </div>
                                            )}

                                        </div>

                                        {/* Sub Total */}
                                        <div className="sub-total border-top d-flex">
                                            <div>
                                                <p>Sub Total</p>
                                            </div>
                                            <div className="ml-auto pl-2">
                                                <p>{subTotal} tk.</p>
                                            </div>
                                        </div>

                                        {/* Shipping Area */}
                                        <div className="shipping mt-3">
                                            {shippingErr ? <p className="text-danger">Shipping area required*</p> :
                                                <p>Shipping area</p>
                                            }

                                            <div className="d-flex">
                                                <div>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="out-side-dhaka"
                                                            name="Outside Dhaka"
                                                            value="120"
                                                            checked={outSideDhaka}
                                                            onChange={onChangeOutSideDhaka}
                                                        />
                                                        <label className="form-check-label" htmlFor="out-side-dhaka">Outside Dhaka</label>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <p className="mb-2">Tk. 120</p>
                                                </div>
                                            </div>

                                            <div className="d-flex">
                                                <div>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="in-side-dhaka"
                                                            name="Inside Dhaka"
                                                            value="60"
                                                            checked={inSideDhaka}
                                                            onChange={onChangeInSideDhaka}
                                                        />
                                                        <label className="form-check-label" htmlFor="in-side-dhaka">Dhaka City</label>
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    <p>Tk. 60</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Discount */}
                                        {couponInfo ?
                                            <div className="sub-total d-flex mt-0">
                                                <div>
                                                    <p>Discount</p>
                                                </div>
                                                <div className="ml-auto pl-2">
                                                    {
                                                        couponInfo.type === 'percent' ?
                                                            <p>{couponInfo.percent} %</p>
                                                            : couponInfo.type === 'fixed' ?
                                                                <p>{couponInfo.amount} tk.</p>
                                                                : null

                                                    }
                                                </div>
                                            </div>
                                            : null}

                                        {/* Total */}
                                        <div className="sub-total border-top d-flex mt-0">
                                            <div>
                                                <p className="text-black">Total</p>
                                            </div>
                                            <div className="ml-auto pl-2">
                                                <p>{countTotal()} tk.</p>
                                            </div>
                                        </div>



                                        {/* Total */}
                                        {/* <div className="sub-total border-bottom d-flex">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div className="ml-auto pl-2">
                                                <p>{subTotal} tk.</p>
                                            </div>
                                        </div> */}

                                        {/* Delivery Method */}
                                        <div className="delivery-method my-3">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    checked={cashOnDelivery}
                                                    className="form-check-input"
                                                    onChange={() => setCashOnDelivery(true)}
                                                    id="cash-on-delivery"
                                                />
                                                <label className="form-check-label" htmlFor="cash-on-delivery">Cash on delivery</label>
                                                <p>***ঢাকার বাহিরে ক্যাশ ও ডেলিভারি অর্ডার কনফার্ম করতে হলে ক্যারিয়ার চার্র্জ ১০০ টাকা অগ্রিম প্রদান করতে হবে***
                                            <br />
                                                বিকাশ নাম্বার : 01532979139

                                            <br />
                                                *Send Money* করতে হবে।
                                            </p>
                                            </div>
                                            {/* <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Visa, Master Card & Amex</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Bkash</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Rocket</label>
                                        </div> */}
                                        </div>

                                        <button type="submit" className="btn text-white btn-block rounded-0 shadow-none order-place-button">
                                            {loading ? <span>Loading...</span> :
                                                <span>place order</span>
                                            }
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                </div>
                : <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center empty-cart">
                            <img src={EmptyShoppingCartImg} className="img-fluid" alt="..." />
                            <h5 className="mt-3">Your Cart is Empty</h5>
                            <Link to="/" type="button" className="btn shadow-none">Back To Shopping</Link>
                        </div>
                    </div>
                </div>
            }
            <FooterComponent />
            {isShow ? <OrderStatusModal data={checkResponseOutData} orderCode={orderCode} hidemodal={hideModal} /> : null}

        </div>
    );
};

export default Index;