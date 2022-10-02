import React, { useEffect, useState } from 'react';
import '../../../styles/Account/order.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { ordersList } from '../../../Redux/Actions/ordersAction';

import LoadingComponent from '../../../Components/Loader';
import OrderViewModal from '../../../Components/Modal/OrderView';
import EmptyImage from '../../../assets/static/empty_shopping_cart.png';

const Index = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [singleOrder, setSingleOrder] = useState({})
    let { orders, loading, error } = useSelector((state => state.orders))

    useEffect(() => {
        dispatch(ordersList())
    }, [dispatch])

    const handleModal = data => {
        setSingleOrder(data)
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <div className="order-index">
            <div className="header text-center mt-3">
                <h5>my orders</h5>
            </div>

            {loading ? <LoadingComponent /> :
                error ?
                    <div className="empty-box text-center mb-4 py-0">
                        <img src={EmptyImage} className="img-fluid" alt="..." />
                        <h5>You have no orders !!</h5>
                        <Link to="/" className="btn shadow-none">Back to Shopping</Link>
                    </div> :
                    <div className="body mb-4">
                        <table className="table table-sm table-borderless table-responsive-md">
                            <thead>
                                <tr>
                                    <td>order code</td>
                                    <td>date</td>
                                    <td>status</td>
                                    <td>total</td>
                                    <td className="text-right">action</td>
                                </tr>
                            </thead>

                            <tbody>

                                {orders.length > 0 && orders.map((order, i) =>
                                    <tr key={i}>
                                        <td><p>{order.order_code}</p></td>
                                        <td><p>{moment(order.created_at).format('DD MMM, YYYY')}</p></td>
                                        <td><p className="text-capitalize">{order.status}</p></td>
                                        <td><p>{order.total_price} tk.</p></td>
                                        <td className="text-right">
                                            <button
                                                type="button"
                                                className="btn rounded-0 shadow-none view-btn"
                                                onClick={() => handleModal(order)}
                                            >view
                                            </button>
                                            {/* <Link to={`/account/order/${order.id}/status`}
                                                type="button"
                                                className="btn rounded-0 shadow-none btn-light text-dark invoice-btn"
                                            >invoice</Link> */}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
            }

            {show ? <OrderViewModal data={singleOrder} hidemodal={hideModal} /> : null}
        </div>
    );
};

export default Index;