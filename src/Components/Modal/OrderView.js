import React from 'react';
import '../../styles/view-order.scss';
import { Icon } from 'react-icons-kit';
import { ic_close, ic_info_outline } from 'react-icons-kit/md';
import moment from 'moment';

const OrderView = ({ data, hidemodal }) => {

    return (
        <div className="order-view-modal">
            <div className="backdrop">
                <div className="custom-dialog">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-white">
                            <div className="d-flex">
                                <div className="flex-fill text-right">
                                    <h6 className="mb-3">your order has been {data.status}</h6>
                                </div>
                                <div className="flex-fill text-right">
                                    <button
                                        type="button"
                                        className="btn rounded-circle shadow-none"
                                        onClick={hidemodal}
                                    >
                                        <Icon icon={ic_close} size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-12 ">

                                    {/* Short Info */}
                                    <div className="short-info mb-4">
                                        <p>Order number: <span>{data.order_code}</span></p>
                                        <p>Date: <span>{moment(data.created_at).format('d MMM, YYYY')}</span></p>
                                        <p>Email: <span>{data.email}</span></p>
                                        <p>Total: <span>{data.total_price} tk.</span></p>
                                        <p>Payment method: <span>{data.delivery_method}</span></p>
                                    </div>

                                    {/* Messages */}
                                    <div className="message" style={{ background: '#007bff' }}>
                                        <div className="d-flex">
                                            <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                            <div className="pl-2"><p>***ঢাকার বাহিরে ক্যাশ ও ডেলিভারিতে অর্ডার কনফার্ম করতে হলে কুরিয়ার চার্র্জ ১০০ টাকা অগ্রিম প্রদান করতে হবে </p></div>
                                        </div>
                                    </div>

                                    <div className="message" style={{ background: '#007bff' }}>
                                        <div className="d-flex">
                                            <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                            <div className="pl-2">
                                                <p>বিকাশ নাম্বার: 01997-335500</p>
                                                <p>রকেট নাম্বার: 01925-618270-7</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="message" style={{ background: '#007bff' }}>
                                        <div className="d-flex">
                                            <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                            <div className="pl-2"><p>*Send Money করতে হবে</p></div>
                                        </div>
                                    </div>

                                    <div className="message" style={{ background: '#007bff' }}>
                                        <div className="d-flex">
                                            <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                            <div className="pl-2"><p>*Reference এ আপনার নাম্বার দিতে হবে</p></div>
                                        </div>
                                    </div>

                                    {/* Order Details */}
                                    <div className="order-details my-4">
                                        <h6 className="text-capitalize">Order details</h6>

                                        <table className="table table-sm table-responsive-sm table-borderless">
                                            <thead>
                                                <tr>
                                                    <td><p>product</p></td>
                                                    <td className="text-center"><p>image</p></td>
                                                    <td className="text-center"><p>size</p></td>
                                                    <td className="text-center"><p>color</p></td>
                                                    <td className="text-right"><p>price</p></td>
                                                    <td className="text-right"><p>quantity</p></td>
                                                    <td className="text-right"><p>total</p></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.products ?
                                                    data.products.length > 0 &&
                                                    data.products.map((product, i) =>
                                                        <tr className="boder" key={i}>
                                                            <td><p>{product.product.name}</p></td>
                                                            <td className="text-center">
                                                                <img src={product.product.image} className="img-fluid" style={{ height: 30 }} alt="..." />
                                                            </td>
                                                            <td className="text-center">
                                                                <p className="size">{product.size}</p>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="colour-box"
                                                                    style={{ background: product.color, width: 20, height: 20, margin: 'auto' }}></div>
                                                            </td>
                                                            <td className="text-right"><p>{product.price} tk.</p></td>
                                                            <td className="text-right"><p>{product.quantity}</p></td>
                                                            <td className="text-right"><p>{product.price * product.quantity} tk.</p></td>
                                                        </tr>
                                                    ) : null}
                                            </tbody>
                                        </table>

                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                {/* Sub total */}
                                                <tr>
                                                    <td><p>Subtotal:</p></td>
                                                    <td className="text-right"><p>{data.total_price} tk.</p></td>
                                                </tr>

                                                {/* Shipping */}
                                                <tr>
                                                    <td><p>Shipping:</p></td>
                                                    <td className="text-right"><p>Tk. {data.delivery_charge} via {data.shipping_area}</p></td>
                                                </tr>

                                                {/* Payment Method */}
                                                <tr>
                                                    <td><p>Payment method:</p></td>
                                                    <td className="text-right"><p>{data.delivery_method}</p></td>
                                                </tr>

                                                {/* total */}
                                                <tr>
                                                    <td><p>Total:</p></td>
                                                    <td className="text-right"><p>{parseInt(data.delivery_charge) + parseInt(data.total_price)} tk.</p></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <br />

                                        <table className="table table-sm table-borderless table-responsive-sm">
                                            <tbody>
                                                {/* Name */}
                                                <tr>
                                                    <td><p>Name:</p></td>
                                                    <td className="text-right text-capitalize"><p>{data.name}</p></td>
                                                </tr>

                                                {/* District */}
                                                <tr>
                                                    <td><p>District:</p></td>
                                                    <td className="text-right text-capitalize"><p>{data.district}</p></td>
                                                </tr>

                                                {/* Courier */}
                                                <tr>
                                                    <td><p>Courier:</p></td>
                                                    <td className="text-right">
                                                        <p>{
                                                            data.courier_name && data.courier_name === 'sundarban_courier' ?
                                                                <span>সুন্দরবন কুরিয়ার</span>
                                                                : data.courier_name && data.courier_name === 'kartua_courier' ?
                                                                    <span>করতোয়া কুরিয়ার</span>
                                                                    : data.courier_name && data.courier_name === 'janani_courier' ?
                                                                        <span>জননী কুরিয়ার</span>
                                                                        : data.courier_name && data.courier_name === 'dhaka_home_delivery' ?
                                                                            <span>ঢাকা হোম ডেলিভারি</span>
                                                                            : data.courier_name && data.courier_name === 's_a_paribahan' ?
                                                                                <span>এস এ পরিবহন</span>
                                                                                : null
                                                        }</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                    {/* Addresses */}
                                    <div className="addresses my-4">
                                        <div className="d-flex">
                                            {/* Billing Address */}
                                            <div>
                                                <h6 className="text-capitalize">Billing address</h6>
                                                <p>{data.name}</p>
                                                <p>{data.district}</p>
                                                <p>{data.phone}</p>
                                            </div>

                                            {/* Shipping Address */}
                                            <div className="ml-auto">
                                                <h6 className="text-capitalize">Shipping address</h6>
                                                <p>{data.delivery_address}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderView;

