import React, { useEffect, useState } from 'react';
import '../../styles/navbar.scss';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { apiURL } from '../../utils/apiURL';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productsList } from '../../Redux/Actions/cartAction';
import { user, facebook, instagram } from 'react-icons-kit/icomoon'
import { ic_add_shopping_cart, ic_dehaze, ic_search, ic_keyboard_arrow_right } from 'react-icons-kit/md';

import SearchComponent from '../Search/Index';
import MegaMenuComponent from '../MegaMenu/Index';
import Logo from '../../assets/static/logo.png';

const NavBar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState(false)
    const [show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [treeMenu, setTreeMenu] = useState()
    const [categories, setCategories] = useState([])
    let { cartProducts } = useSelector((state => state.products))
    const [scrolled, setScrolled] = useState(true)
    const [facebookURL] = useState('https://www.facebook.com/urfashion21')
    const [instagramURL] = useState('https://www.instagram.com/urfasshion21/')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 150
            if (isTop !== true) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        })

        dispatch(productsList())
        const fetchCategories = async () => {
            try {
                const categoryResponse = await axios.get(`${apiURL}website/categories`)
                if (categoryResponse.status === 200) {
                    setCategories(categoryResponse.data.categories)
                }
            } catch (error) {
                if (error) console.log(error)
            }
        }

        fetchCategories()
    }, [dispatch])


    // Tree View
    const treeView = (treeData) => {
        return (
            treeData.map((data, i) =>
                <div key={i}>
                    {data.children ?
                        <button
                            type="button"
                            className="btn btn-sm btn-block shadow-none btn-white rounded-0 text-left border-bottom px-2 m-0"
                            onClick={() => setTreeMenu(i)}
                        >
                            {data.name}
                            <Icon
                                icon={ic_keyboard_arrow_right}
                                className={treeMenu === i | data && data.children ? "float-right rotate-down" : "float-right rotate-right"}
                                size={20}
                            />
                        </button>
                        :
                        <Link
                            to={`shop/${data.id}`}
                            className="border-bottom"
                        >
                            {data.name}
                            <Icon
                                icon={ic_keyboard_arrow_right}
                                className={treeMenu === i | data && data.children ? "float-right rotate-down" : "float-right rotate-right"}
                                size={20}
                            />
                        </Link>
                    }
                    {treeMenu === i ? <div style={{ paddingLeft: 10 }}>{data && data.children ? treeView(data.children) : null}</div> : null}
                </div>
            )
        )
    }


    return (
        <div>
            <div className={scrolled ? "custom-navbar border-bottom" : "custom-navbar scrolled shadow"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div>
                                    <Link to="/">
                                        <img src={Logo} className="img-fluid" alt="..." />
                                    </Link>
                                </div>

                                {/* Desktop Menu Items */}
                                <div className="page-links d-none d-lg-block px-2">
                                    <ul>
                                        <li><NavLink exact activeClassName="is-Active" to="/">home</NavLink></li>
                                        <li><NavLink exact activeClassName="is-Active" to="/shop">shop</NavLink></li>
                                        <li>
                                            <button
                                                type="button"
                                                className="btn shadow-none"
                                                onMouseOver={() => setShow(true)}
                                                onClick={() => setShow(!show)}
                                            >
                                                categories
                                            <Icon
                                                    className={show ? "rotate-down" : "rotate-right"}
                                                    icon={ic_keyboard_arrow_right}
                                                    size={20}
                                                />
                                            </button>
                                        </li>
                                        <li><NavLink exact activeClassName="is-Active" to="/contact">contact</NavLink></li>
                                        <li><NavLink exact activeClassName="is-Active" to="/sign-in">my account</NavLink></li>
                                    </ul>
                                    {/* Mega Menu */}
                                    <div
                                        className={show ? "custom-mega-menu shadow open" : "custom-mega-menu shadow"}
                                        onMouseLeave={() => setShow(false)}
                                    >
                                        <MegaMenuComponent items={categories} />
                                    </div>
                                </div>
                                {/* Search Component */}
                                <div className="d-none d-lg-block pl-2 pl-lg-0" style={{ paddingTop: 4 }}>
                                    <SearchComponent />
                                </div>

                                {/* Facebook Button */}
                                <div className="pr-2 ml-auto">
                                    <div className="cart-box social-box">
                                        <a href={`${facebookURL}`}
                                            type="button"
                                            className="btn rounded-circle shadow-none cart-btn">
                                            <Icon icon={facebook} size={16} />
                                        </a>
                                    </div>
                                </div>
                                {/* Instagram Button */}
                                <div className="pr-2">
                                    <div className="cart-box social-box">
                                        <a href={`${instagramURL}`}
                                            type="button"
                                            className="btn rounded-circle shadow-none cart-btn">
                                            <Icon icon={instagram} size={16} />
                                        </a>
                                    </div>
                                </div>
                                {/* Search Button */}
                                <div className="pr-2 d-lg-none">
                                    <div className="cart-box">
                                        <button
                                            type="button"
                                            onClick={() => setSearch(!search)}
                                            className="btn rounded-circle shadow-none cart-btn">
                                            <Icon icon={ic_search} size={22} />
                                        </button>
                                    </div>
                                </div>
                                {/* Account Button */}
                                <div className="pr-2">
                                    <div className="cart-box">
                                        <Link to="/sign-in"
                                            type="button"
                                            className="btn rounded-circle shadow-none cart-btn">
                                            <Icon icon={user} size={22} />
                                        </Link>
                                    </div>
                                </div>
                                {/* Cart Button */}
                                <div className="pr-2">
                                    <div className="cart-box">
                                        <Link to="/shopping-cart"
                                            type="button"
                                            className="btn rounded-circle shadow-none cart-btn">
                                            <Icon icon={ic_add_shopping_cart} size={22} />
                                        </Link>
                                        {
                                            cartProducts ?
                                                <small>{cartProducts.length}</small>
                                                : <small>0</small>
                                        }
                                    </div>
                                </div>
                                {/* Bar Button */}
                                <div className="d-lg-none">
                                    <button
                                        type="button"
                                        className="btn rounded-circle shadow-none p-1 bar-btn"
                                        onClick={() => setOpen(true)}>
                                        <Icon icon={ic_dehaze} size={25} />
                                    </button>
                                </div>
                            </div>

                            {/* Search component in mobile */}
                            {search ?
                                <div className="pt-2 d-lg-none">
                                    <SearchComponent />
                                </div>
                                : null}
                        </div>
                    </div>

                </div>
            </div>
            {/* Mobile Menu Items */}
            <div
                className={isOpen ? "backdrop d-lg-none show-backdrop" : "backdrop d-lg-none"}
                onClick={() => setOpen(!isOpen)}>
            </div>
            <div className={isOpen ? "mobile-menu d-lg-none open-mobile-menu" : "mobile-menu d-lg-none hide-mobile-menu"}>
                {/* Menu Body */}
                <div className="menu-body p-3">
                    <ul>
                        <li><NavLink exact activeClassName="is-Active" to="/">home<Icon icon={ic_keyboard_arrow_right} className="float-right" size={20} /></NavLink></li>
                        <li><NavLink exact activeClassName="is-Active" to="/shop">shop<Icon icon={ic_keyboard_arrow_right} className="float-right" size={20} /></NavLink></li>
                        <li>
                            <button
                                type="button"
                                className="btn shadow-none"
                                onClick={() => setSubMenu(!subMenu)}
                            >
                                categories
                                <Icon icon={ic_keyboard_arrow_right} className={subMenu ? "float-right rotate-down" : "float-right rotate-right"} size={20} />
                            </button>
                            {/* Sub Menu */}
                            <div className={subMenu ? "sub-menu px-3" : "sub-menu px-3 d-none"}>
                                {treeView(categories)}
                            </div>
                        </li>
                        <li><NavLink exact activeClassName="is-Active" to="/contact">contact<Icon icon={ic_keyboard_arrow_right} className="float-right" size={20} /></NavLink></li>
                        <li><NavLink exact activeClassName="is-Active" to="/sign-in">my account<Icon icon={ic_keyboard_arrow_right} className="float-right" size={20} /></NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;