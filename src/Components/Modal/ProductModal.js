import React, { useEffect, useState } from 'react';
import '../../styles/modal.scss';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';
import { Icon } from 'react-icons-kit';
import { ic_done, ic_close } from 'react-icons-kit/md';
import ReactHtmlParser from 'react-html-parser';

const ProductModal = (props) => {
    const dispatch = useDispatch()
    const [slectedSize, setSelectedSize] = useState({})
    const [selectedColor, setSelectedColor] = useState({})

    useEffect(() => {
        setSelectedSize(props.productinfo.size ? props.productinfo.size[0] : '')
        setSelectedColor(props.productinfo.color ? props.productinfo.color[0] : '')
    }, [props])

    // Add to cart
    const addToCart = data => {
        const newData = {
            id: data.id,
            cartId: Date.now(),
            name: data.name,
            price: data.selling_price,
            stock: data.stock,
            image: data.image,
            quantity: 1,
            available_quantity: parseInt(data.quantity),
            size: slectedSize,
            color: selectedColor
        }
        dispatch(addProduct(newData))
        props.hidemodal()
    }

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="custom-product-modal"
            >
                <Modal.Header className="pt-2 px-1 pb-0 border-0">
                    <button
                        type="button"
                        className="btn rounded-0 shadow-none ml-auto"
                        onClick={() => props.hidemodal()}
                    >
                        <Icon icon={ic_close} size={28} />
                    </button>
                </Modal.Header>

                <Modal.Body>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={props.productinfo.image} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 pt-3 pt-lg-0">
                            <h5 className="mb-2">{props.productinfo.name}</h5>
                            <p className="mb-0">Price: {props.productinfo.selling_price} tk</p>
                            <p className="mb-2">Available Quantity: {props.productinfo.stock}</p>
                            <p>{ReactHtmlParser(props.productinfo.description)}</p>

                            {/* Sizes */}
                            <div className="sizes">
                                <div className="d-flex">
                                    <div>
                                        <h6>Sizes</h6>
                                    </div>
                                    <div>
                                        <ul>
                                            {props.productinfo.size ?
                                                props.productinfo.size.map((size, i) =>
                                                    <li
                                                        key={i}
                                                        onClick={() => setSelectedSize(size)}
                                                    >
                                                        <div className="flex-center flex-column">
                                                            <p>{size}</p>
                                                        </div>
                                                        {slectedSize === size ?
                                                            <div className="overlay">
                                                                <div className="flex-center flex-column">
                                                                    <p>{size}</p>
                                                                </div>
                                                            </div>
                                                            : null}
                                                    </li>
                                                ) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Colors */}
                            <div className="colors">
                                <div className="d-flex">
                                    <div>
                                        <h6>Colors</h6>
                                    </div>
                                    <div>
                                        <ul>
                                            {props.productinfo.color ?
                                                props.productinfo.color.map((color, i) =>
                                                    <li
                                                        key={i}
                                                        style={{ background: `${color}` }}
                                                        onClick={() => setSelectedColor(color)}
                                                    >
                                                        {selectedColor === color ?
                                                            <div className="overlay">
                                                                <div className="flex-center flex-column">
                                                                    <Icon icon={ic_done} size={20} style={{ color: '#fff' }} />
                                                                </div>
                                                            </div>
                                                            : null}
                                                    </li>
                                                ) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <button
                                type="button"
                                className="btn btn-block shadow-none"
                                onClick={() => addToCart(props.productinfo)}
                            >add cart</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default ProductModal;