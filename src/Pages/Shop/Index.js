import React, { useEffect, useState } from 'react';
import '../../styles/shop.scss';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md';
import { shoppingBag } from 'react-icons-kit/feather';
// import { heartO } from 'react-icons-kit/fa';
import { apiURL } from '../../utils/apiURL';
import { Link, NavLink, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Index';
import LoadingComponent from '../../Components/Loader';
import ProductModalComponent from '../../Components/Modal/ProductModal';

import EmptyProductsImg from '../../assets/static/empty_shopping_cart.png';


const Index = () => {
    const history = useHistory()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})
    const [showCategory, setShowCategory] = useState(true)
    const [showPrice, setShowPrice] = useState(true)
    const [nullProduct, setNullProduct] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])
    const [filteredData, setFilteredData] = useState(categoryProducts)
    const [limit, setLimit] = useState(18)
    const productsPerPage = 18
    const dispatch = useDispatch()
    const [subMenu, setSubMenu] = useState()
    const [isChecked, setChecked] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const categoryResponse = await axios.get(`${apiURL}website/categories`)
                let categoryProducts
                if (id) {
                    categoryProducts = await axios.get(`${apiURL}website/shop/${id}`)
                } else {
                    categoryProducts = await axios.get(`${apiURL}website/shop`)
                }

                if (categoryResponse.data.categories && categoryProducts.data) {
                    setCategories(categoryResponse.data.categories)
                    setCategoryProducts(categoryProducts.data)
                    setFilteredData(categoryProducts.data)
                    // setLimit(18)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setNullProduct(true)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        // Check window width
        const windowWidth = () => {
            const width = window.innerWidth
            if (width < 576) {
                setLimit(10)
            }

            if (width > 576 && width < 768) {
                setLimit(12)
            }

            if (width > 768 && width < 992) {
                setLimit(16)
            }

            if (width > 992) {
                setLimit(30)
            }

            if (width > 1280) {
                setLimit(40)
            }

            if (width > 1500) {
                setLimit(42)
            }
        }

        fetchData()
        windowWidth()
    }, [id, history])

    const handleModal = data => {
        setModalShow(true)
        setModalData(data)
    }

    const hideModal = () => {
        setModalShow(false)
    }

    // On change price handeller
    const priceFilter = data => {
        setChecked(data)
        if (data === 0) {
            return setFilteredData(categoryProducts)
        } else if (data === 1) {
            const filtereData = categoryProducts.filter(x => x.selling_price < 1000)
            return setFilteredData(filtereData)
        } else if (data === 2) {
            const filtereData = categoryProducts.filter(x => x.selling_price > 1000 && x.selling_price < 10000)
            return setFilteredData(filtereData)
        }
        const filtereData = categoryProducts.filter(x => x.selling_price > 10000)
        return setFilteredData(filtereData)
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

    // Replace white space with (-)
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
        <div className="category-index">
            {loading ? <LoadingComponent /> :

                <div>
                    <NavBar categories={categories} />

                    <div className="container-fluid py-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">


                                    {/* Desktop Side Menu */}
                                    <div className="flex-side-menu d-none d-lg-block p-3">
                                        <div className="content">

                                            <div className="custom-dropdown p-2">

                                                {/* Category Dropdown */}
                                                <div className="dropdown-header"
                                                    onClick={() => setShowCategory(!showCategory)}
                                                >
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-0">product categories</h6></div>
                                                        <div className="ml-auto">
                                                            <Icon
                                                                icon={ic_keyboard_arrow_right}
                                                                size={25}
                                                                style={{ color: '#000' }}
                                                                className={showCategory ? "angle-icon rotate" : "angle-icon"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Collapse in={showCategory}>
                                                    <div className="dropdown-body">
                                                        {categories.length > 0 && categories.map((category, i) =>

                                                            <div className="menu" key={i}>
                                                                <button
                                                                    type="button"
                                                                    className="btn shadow-none btn-block text-left pr-1"
                                                                    onClick={() => setSubMenu(i)}
                                                                >
                                                                    {category.name}
                                                                    <Icon
                                                                        icon={ic_keyboard_arrow_right}
                                                                        size={20}
                                                                        style={{ color: '#000' }}
                                                                        className={subMenu === i ? "float-right text-danger angle-icon rotate" : "float-right angle-icon"}
                                                                    />
                                                                </button>
                                                                {subMenu === i ?
                                                                    <div className="menu-child">
                                                                        {category.children.map((child, k) =>
                                                                            <NavLink
                                                                                exact
                                                                                to={`/shop/${child.id}`}
                                                                                activeClassName="is-active"
                                                                                key={k}
                                                                            >
                                                                                <Icon
                                                                                    icon={ic_keyboard_arrow_right}
                                                                                    size={20}
                                                                                    style={{ color: '#000' }}
                                                                                />{child.name}
                                                                            </NavLink>
                                                                        )}
                                                                    </div>
                                                                    : null}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Collapse>

                                                {/* Price Dropdown  */}
                                                <div className="dropdown-header"
                                                    onClick={() => setShowPrice(!showPrice)}
                                                >
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-0">price</h6></div>
                                                        <div className="ml-auto">
                                                            <Icon
                                                                icon={ic_keyboard_arrow_right}
                                                                size={25}
                                                                style={{ color: '#000' }}
                                                                className={showPrice ? "angle-icon rotate" : "angle-icon"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Collapse in={showPrice}>
                                                    <div className="dropdown-body mb-3">
                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-all" checked={isChecked === 0} onChange={() => priceFilter(0)} />
                                                            <label className="form-check-label" htmlFor="price-ckeck-all">All</label>
                                                        </div>
                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-1" checked={isChecked === 1} onChange={() => priceFilter(1)} />
                                                            <label className="form-check-label" htmlFor="price-ckeck-1">0 - 1000</label>
                                                        </div>

                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-2" checked={isChecked === 2} onChange={() => priceFilter(2)} />
                                                            <label className="form-check-label" htmlFor="price-ckeck-2">1000 - 10000</label>
                                                        </div>

                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-3" checked={isChecked === 3} onChange={() => priceFilter(3)} />
                                                            <label className="form-check-label" htmlFor="price-ckeck-3">10000 - above</label>
                                                        </div>
                                                    </div>
                                                </Collapse>

                                            </div>
                                        </div>
                                    </div>


                                    {/* Main Menu */}
                                    <div className="flex-fill flex-main-menu p-lg-3">
                                        {nullProduct ?
                                            <div className="null-content rounded-circle">
                                                <div className="flex-center flex-column">
                                                    <img src={EmptyProductsImg} className="img-fluid" alt="..." />
                                                    <p className="mb-0">Opps! Products not found !!</p>
                                                    <Link to="/" type="button" className="btn shadow-none text-white">Back to Home</Link>
                                                </div>
                                            </div>
                                            :
                                            <div className="main-content">
                                                <div className="row">

                                                    {/* Products */}
                                                    <div className="col-12">
                                                        {filteredData && filteredData.length > 0 ?
                                                            filteredData.slice(0, limit).map((product, i) =>
                                                                <div className="card shop-card" key={i}>
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
                                                            ) :
                                                            // No product 
                                                            <div className="null-content rounded-circle">
                                                                <div className="flex-center flex-column text-center">
                                                                    <img src={EmptyProductsImg} className="img-fluid" alt="..." />
                                                                    <p className="mb-0">Opps! Products not available on <br /> this price range !! </p>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>


                                                    {filteredData.length <= limit ?
                                                        null :
                                                        <div className="col-12 text-center">
                                                            <button
                                                                type="button"
                                                                className="btn shadow-none load-more-btn"
                                                                onClick={() => setLimit(limit + productsPerPage)}
                                                            >Load More</button>
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        }
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                    {/* Product Modal */}
                    {modalShow ?
                        <ProductModalComponent
                            productinfo={modalData}
                            show={modalShow}
                            hidemodal={hideModal}
                            onHide={() => setModalShow(false)}
                        />
                        : null}
                </div>
            }
        </div >
    );
};

export default Index;