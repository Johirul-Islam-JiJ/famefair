import React, { useEffect } from 'react';
import '../../styles/shopping-cart.scss';
import { Icon } from 'react-icons-kit';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { useForm } from "react-hook-form";
import { plus, minus } from 'react-icons-kit/ionicons';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productsList, removeProduct, incrementQuantity, decrementQuantity } from '../../Redux/Actions/cartAction';

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

import EmptyShoppingCartImg from '../../assets/static/empty_shopping_cart.png';
import MasterCardLogo from '../../assets/static/master-card.png';
import VisaCardLogo from '../../assets/static/visa-card.png';
import RocketLogo from '../../assets/static/rocket.jpeg';
import BkashLogo from '../../assets/static/bkash.jpg';

toast.configure({ autoClose: 2000 })
const Index = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()
    let { cartProducts } = useSelector((state => state.products))
    let subTotal = 0

    useEffect(() => {
        dispatch(productsList())
    }, [dispatch])

    // Remove from cart
    const removeFromCart = data => {
        const newData = {
            id: data.id,
            cartId: data.cartId,
            name: data.name,
            price: data.selling_price,
            stock: data.stock,
            image: data.image,
            quantity: 1
        }
        dispatch(removeProduct(newData))
    }

    // Apply coupon
    const onSubmit = async (data) => {
        try {
            const response = await axios.get(`${apiURL}website/coupon/${data.code}`)
            if (response.status === 200) {
                const couponData = {
                    code: response.data.code,
                    type: response.data.type,
                    amount: parseInt(response.data.discount_amount),
                    percent: parseInt(response.data.discount_percent)
                }

                localStorage.setItem('couponData', JSON.stringify(couponData))
                toast.info('Coupon applied in you total amount')
            }
        } catch (error) {
            if (error) {
                toast.warn('Coupon not found')
                localStorage.removeItem('couponData')
            }
        }
    }


    return (
        <div className="shopping-cart">
            <NavBarComponent />

            {cartProducts && cartProducts.length > 0 ?
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                            <div className="cart-header">
                                <h5 className="mb-0">
                                    <span className="text-black">shopping cart</span>
                                    <span className="text-muted">/checkout</span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Products Column */}
                        <div className="col-12 col-lg-8">
                            <table className="table table-sm table-borderless table-responsive-sm product-table">
                                <thead>
                                    <tr>
                                        <td>product</td>
                                        <td></td>
                                        <td className="text-center">size</td>
                                        <td className="text-center">colour</td>
                                        <td className="text-center">price</td>
                                        <td className="text-center">quantity</td>
                                        <td className="text-center">sub total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.length > 0 && cartProducts.map((product, i) =>
                                        <tr key={i}>
                                            {/* Image */}
                                            <td>
                                                <div className="img-box">
                                                    <img src={product.image} className="img-fluid" alt="..." />
                                                </div>
                                            </td>
                                            {/* Name & Remove from cart */}
                                            <td style={{ minWidth: '150px' }}>
                                                <p className="mb-1">{product.name}</p>
                                                <small onClick={() => removeFromCart(product)}>Remove</small>
                                            </td>
                                            {/* Size */}
                                            <td className="text-center font-weight-bold text-dark">{product.size}</td>
                                            {/* Colour */}
                                            <td className="text-center">
                                                <div style={{ width: 25, height: 20, margin: 'auto', background: product.color }}></div>
                                            </td>
                                            {/* Price */}
                                            <td className="text-center">Tk. {product.price}</td>
                                            <td
                                                className="text-center"
                                                style={{ minWidth: '145px' }}
                                            >
                                                {/* Decrement Quantity */}
                                                <button
                                                    type="button"
                                                    className="btn shadow-none"
                                                    onClick={() => dispatch(decrementQuantity(product.cartId))}
                                                    disabled={product.quantity <= 1 ? true : false}
                                                >
                                                    <Icon icon={minus} />
                                                </button>

                                                {/* Quantity */}
                                                <button type="button" className="btn shadow-none" disabled>{product.quantity}</button>

                                                {/* Increment Quantity */}
                                                <button
                                                    type="button"
                                                    className="btn shadow-none"
                                                    onClick={() => dispatch(incrementQuantity(product.cartId))}
                                                    disabled={product.quantity >= product.available_quantity ? true : false}
                                                >
                                                    <Icon icon={plus} />
                                                </button>
                                            </td>
                                            <td className="text-center">Tk. {product.price * product.quantity}</td>
                                            <td className="d-none">{subTotal += product.price * product.quantity}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Promotion Code */}
                            <div className="coupon-box">
                                {errors.code && errors.code.message ? (
                                    <p className="text-danger">{errors.code && errors.code.message}</p>
                                ) : <p className="text-muted">Enter your coupon code</p>
                                }

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-group mb-2">
                                        <input
                                            type="text"
                                            name="code"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Coupon code"
                                            ref={register({
                                                required: "Coupon code is required*",
                                            })}
                                        />
                                        <div className="input-group-prepend">
                                            <button
                                                type="submit"
                                                className="btn rounded-0 shadow-none"
                                            >APPLY</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Cart Total Column */}
                        <div className="col-12 col-lg-4 cart-total mt-4 mt-lg-0">
                            <div className="card rounded-0 mb-4">
                                <div className="card-body">
                                    <div className="title border-bottom mb-3">
                                        <h6 className="mb-2">cart totals</h6>
                                    </div>
                                    <table className="table table-sm table-borderless mb-4">
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td className="text-right">{subTotal} tk.</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td className="text-right">{subTotal} tk.</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <button
                                        type="button"
                                        className="btn btn-block rounded-0 shadow-none"
                                        onClick={() => history.push('/checkout')}
                                    >proceed to checkout</button>
                                </div>
                            </div>

                            {/* Payment Security Info */}
                            <div className="payment-security-message pt-3">
                                <div className="border-bottom title mb-3">
                                    <h6 className="mb-2">payment security</h6>
                                </div>
                                <p className="mb-4">Encryption ensures increased transaction security. SSL technology protects data linked to personal and payment info.</p>

                                <ul>
                                    <li>
                                        <div className="img-box">
                                            <img src={MasterCardLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={VisaCardLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={RocketLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={BkashLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
};

export default Index;