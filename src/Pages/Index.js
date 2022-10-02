import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../utils/apiURL';

import NavbarComponent from '../Components/NavBar/NavBar';
import SliderComponent from '../Components/Slider/SliderComponent';
// import CampaignComponent from '../Components/Campaigns/Index';
import CategoryComponent from '../Components/Category/CategoryComponent';
import FeaturedProductsComponent from '../Components/FeaturedProducts/Index';
import LatestProductsComponent from '../Components/LatestProducts/Index';
import FooterComponent from '../Components/Footer/Index';
import LoadingBannerComponent from '../Components/Modal/HomeLoadingModal';

const Index = () => {
    const [loading, setLoading] = useState(false)
    const [sliders, setSliders] = useState([])
    const [categories, setCategories] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}website`)
                if (response.status === 200) {
                    setSliders(response.data.sliders)
                    setCategories(response.data.categories)
                    setFeaturedProducts(response.data.featuredProducts)
                    setLoading(false)
                }
            } catch (error) {
                if (error) {
                    console.log(error.response)
                }
            }
        }

        fetchData()
    }, [])

    return (
        <div style={{ background: "#f2f3f5" }}>
            {loading ? <LoadingBannerComponent /> :
                <div>
                    <NavbarComponent />

                    {/* Slider */}
                    {sliders && sliders ?
                        <SliderComponent sliders={sliders} />
                        : null}

                    {/* <CampaignComponent campaigns={sliders} /> */}

                    {/* Category */}
                    {categories &&
                        categories.length > 0 ?
                        <CategoryComponent categories={categories} />
                        : null}

                    {/* Featured Products */}
                    {featuredProducts &&
                        featuredProducts.length > 0 ?
                        <FeaturedProductsComponent products={featuredProducts} />
                        : null}

                    {/* Latest Products */}
                    {categories ?
                        <LatestProductsComponent categories={categories} />
                        : null}

                    {/* Footer */}
                    <FooterComponent />

                </div>
            }
        </div>
    );
};

export default Index;