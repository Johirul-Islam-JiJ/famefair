import React, { useEffect, useState } from 'react';
import '../../styles/search-result.scss';
import '../../styles/product.scss';
import queryString from 'query-string';
import { apiURL } from '../../utils/apiURL';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { shoppingBag } from 'react-icons-kit/feather';
// import { heartO } from 'react-icons-kit/fa';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';
import ProductModalComponent from '../../Components/Modal/ProductModal';
import LoadingComponent from '../../Components/Loader';

import NotFoundImg from '../../assets/static/empty_shopping_cart.png';

const Index = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})
    const value = queryString.parse(props.location.search).query
    const dispatch = useDispatch()

    useEffect(() => {
        const filterProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}website/search/${value}`)
                setProducts(response.data)
                setLoading(false)
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        filterProducts()
    }, [value])

    const handleModal = data => {
        setModalShow(true)
        setModalData(data)
    }

    const hideModal = () => {
        setModalShow(false)
    }

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
            size: data.size ? data.size[0] : null,
            color: data.color ? data.color[0] : null
        }
        dispatch(addProduct(newData))
    }

    // Replace white space with (_)
    const replaceWhiteSpace = (data) => {
        let productName = data
        productName = productName.replace(/ /g, "-")
        return productName
    }

    // Discount Percent
    const discount = (mrp, selling_price) => {
        let subtraction = mrp - selling_price
        let percenteg = parseInt((subtraction * 100) / mrp)
        return percenteg
    }

    return (
        <div className="search-result">
            {isLoading ? <LoadingComponent /> :
                <div>
                    <NavBarComponent />


                    <div className="container py-4">
                        <div className="row">
                            <div className="col-12 text-center mb-3">
                                <h5>You search for: {value}</h5>
                            </div>

                            {/* Products */}
                            {products.length > 0 ?
                                <div className="col-12">
                                    {products.map((product, i) =>
                                        <div className="card product" key={i}>
                                            <div className="card-body">
                                                {/* Discount Sticker */}
                                                {product.selling_price < product.mrp ?
                                                    <div className="discount-sticker rounded-circle">
                                                        <div className="flex-center flex-column">
                                                            <p>{discount(product.mrp, product.selling_price)}%</p>
                                                            <p>OFF</p>
                                                        </div>
                                                    </div>
                                                    : null}

                                                <Link to={`/product/${product.id}/${replaceWhiteSpace(product.name)}`}>
                                                    <div className="img-box">
                                                        <img src={product.image} className="img-fluid" alt="..." />
                                                    </div>
                                                </Link>


                                                {/* Card footer */}
                                                <div className="custom-footer">

                                                    {/* Quick View Button */}
                                                    <button
                                                        type="button"
                                                        className="btn shadow-none quick-view-btn"
                                                        onClick={() => handleModal(product)}
                                                    >Quick View</button>

                                                    {/* Cart button */}
                                                    <button
                                                        type="button"
                                                        className="btn rounded-circle shadow-none cart-add-btn"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        <Icon icon={shoppingBag} size={18} />
                                                    </button>

                                                    {/* Wish list button */}
                                                    {/* <button
                                                                type="button"
                                                                className="btn rounded-circle shadow-none wish-list-btn"
                                                            >
                                                                <Icon icon={heartO} size={18} />
                                                            </button> */}

                                                    {/* Product information */}
                                                    <Link to={`/product/${product.id}/${replaceWhiteSpace(product.name)}`}>
                                                        <div className="info">
                                                            <p className="name">{product.name.slice(0, 25)}</p>
                                                            <div className="d-flex pricing">
                                                                <div>
                                                                    <h5>৳ {product.selling_price}</h5>
                                                                </div>
                                                                {product.selling_price < product.mrp ?
                                                                    <div className="ml-auto">
                                                                        <del>৳ {product.mrp}</del>
                                                                    </div>
                                                                    : null}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                :
                                <div className="col-12 text-center four-o-four mt-3">
                                    <img src={NotFoundImg} className="img-fluid" alt="..." />
                                    <h5 className="mt-3">0 Results</h5>
                                    <Link to="/" type="button" className="btn shadow-none">Back To Shopping</Link>
                                </div>
                            }
                        </div>
                    </div>

                    {/* Product Modal */}
                    {modalShow ?
                        <ProductModalComponent
                            productinfo={modalData}
                            show={modalShow}
                            hidemodal={hideModal}
                            onHide={() => setModalShow(false)}
                        />
                        : null}


                    <FooterComponent />
                </div>
            }
        </div>
    );
};

export default Index;