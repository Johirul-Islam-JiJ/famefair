import React from 'react';
import '../../styles/order-status-modal.scss';
import { Icon } from 'react-icons-kit';
import { ic_close, ic_done_all } from 'react-icons-kit/md';

import Logo from '../../assets/static/logo.png';

const OrderStatusModal = ({ data, orderCode, hidemodal }) => {

    const downloadOrder = () => {
        window.print()
    }

    return (
        <div className="order-status-modal">
            <div className="backdrop">
                <div className="custom-dialog">

                    <div className="card border-0 shadow">
                        <div className="card-header border-0 bg-white">
                            <div className="d-flex mb-2">
                                <div className="flex-fill text-right">
                                    <h5>Order Status</h5>
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
                            <div className="boder"></div>
                        </div>
                        <div className="card-body pt-0" id="section-to-print">
                            <div className="text-center">
                                <img src={Logo} className="img-fluid" alt="..." />
                                <br />
                                <Icon icon={ic_done_all} className="text-success" size={30} />
                                <h6>thank you, your order has been recived</h6>
                            </div>

                            <div className="row border m-2 py-3 order-details">
                                <div className="col-12 col-lg-6">
                                    <p>{data.name ?? null}</p>
                                    <p>{data.phone ?? null}</p>
                                    <p className="text-lowercase">{data.email ?? null}</p>
                                    <p>order code: {orderCode ?? null}</p>
                                </div>
                                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                    <h6>Delivery info</h6>
                                    <p>delivery method: {data.delivery_method ?? null}</p>
                                    <p>delivery address: {data.delivery_address ?? null}</p>
                                    <p>shipping area: {data.shipping_area ?? null}</p>
                                    <p>courier: {
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
                                </div>
                            </div>

                            <div className="row products">
                                <div className="col-12 px-4 pt-4">
                                    <table className="table table-sm table-borderless">
                                        <thead>
                                            <tr>
                                                <td><p>Name</p></td>
                                                <td className="text-center"><p>Size</p></td>
                                                <td className="text-center"><p>Color</p></td>
                                                <td className="text-center"><p>Quantity</p></td>
                                                <td className="text-right"><p>Price</p></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.products ?
                                                data.products.length > 0 &&
                                                data.products.map((product, i) =>
                                                    <tr key={i}>
                                                        <td><p>{product.name}</p></td>
                                                        <td className="text-center"><p>{product.size}</p></td>
                                                        <td className="text-center">
                                                            <div style={{ background: product.color, width: 20, height: 20, margin: 'auto' }}></div>
                                                        </td>
                                                        <td className="text-center"><p>{product.quantity}</p></td>
                                                        <td className="text-right"><p>{product.quantity * product.price} tk.</p></td>
                                                    </tr>
                                                ) : null}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 text-right">
                                    <p style={styles.text}>Discount: {data.discount ?? null}
                                        {data.discount_type === 'percent' ? ' %' : data.discount_type === 'fixed' ? ' tk.' : null}</p>
                                    <p style={styles.text}>Sub-total: {data.total_price ? data.total_price - data.delivery_charge : null} tk.</p>
                                    <p style={styles.text}>Delivery charge: {data.delivery_charge ?? null} tk.</p>
                                    <p style={styles.text}>Total price: {data.total_price ?? null} tk.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer bg-white border-0">
                            <button
                                type="button"
                                className="btn btn-block shadow-none text-black"
                                onClick={downloadOrder}
                            >Download Boucher
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default OrderStatusModal;

const styles = {
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 0,
        fontWeight: 500
    }
}