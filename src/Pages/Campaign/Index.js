import React, { useEffect, useState } from 'react';
import '../../styles/Campaign/style.scss';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { apiURL } from '../../utils/apiURL';

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';
import LoadingComponent from '../../Components/Modal/HomeLoadingModal'

import BannerImg from '../../assets/banner_1.jpg';


const Index = () => {
    const { id, name } = useParams()
    const { register, handleSubmit, errors } = useForm()
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await Axios.get(`${apiURL}getLatestProducts`)
                setProducts(response.data.result)
                setLoading(false)
            } catch (error) {
                if (error) {
                    console.log(error.message)
                }
            }
        }

        fetchProducts()
    }, [id])

    // Replace white space with (-)
    const replaceWhiteSpace = (data) => {
        let productName = data
        productName = productName.replace(/ /g, "-")
        return productName
    }

    // Search Product
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="campaign">
            {isLoading ? <LoadingComponent /> :
                <div>
                    <NavbarComponent />

                    {/* Header */}
                    <div className="header py-lg-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0">
                                        <img src={BannerImg} className="img-fluid" alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <h3>{name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter */}
                    <div className="filter pt-3 pt-lg-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="d-flex">
                                                <div className="form-group mb-0 flex-fill">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                                                        placeholder="Search here..."
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                                <div className="pl-2">
                                                    <button type="submit" className="btn shadow-none">Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="products  pb-3">
                        <div className="container">
                            <div className="row">
                                {products.length > 0 ?
                                    <div className="col-12 p-2 p-lg-0">
                                        {products && products.map((product, i) =>
                                            <div className="card campaign-product-card border-0" key={i}>
                                                <Link to={`/product/${product.id}/${replaceWhiteSpace(product.name)}`}>
                                                    <div className="card-body">
                                                        <div className="img-box">
                                                            <img src={product.image} className="img-fluid" alt="..." />
                                                            <div className="offer-reason">
                                                                <p>70% cash back</p>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h6>{product.name}</h6>
                                                            <div className="d-flex">
                                                                <div>
                                                                    <p className="text-danger">
                                                                        <del>{product.selling_price} tk.</del>
                                                                    </p>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <p>{product.selling_price} tk.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            }
        </div>
    );
};

export default Index;