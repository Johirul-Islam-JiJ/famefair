import React from 'react';
import '../../styles/about-us.scss';

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    return (
        <div className="about-us">
            <NavbarComponent />

            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>About Us</h1>
                       
                    </div>
                </div>
            </div>

            {/* Contact Main */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center text-lg-left">
                                <h1>About UR Fashions BD</h1>
                            </div>
                            <p style={{ textAlign: 'justify' }} >
                            UR Fashion is the fastest growing company in Bangladesh. A bright star in the fashion house & e-commerce sector of Bangladesh.
                            <br/>
                            <br/>
                           <strong> Progress and Achieved Success:</strong><br/> 
                            On July 10, 2010, IT was associated with online buying and selling. The parent Company BR Bazar / BR Corporation- whose work and honesty have created thousands of new young entrepreneurs, a large part of whom are involved in the e-commerce business in Bangladesh today, And the e-commerce / online shopping that we have worked with a good reputation during this long journey are Bikroy dot com, Kaymu, Daraz, Ajker Deal, Bagdoom, Beponee, Esho, Bdhaat, Ibuy, Qbuybd, Kiksha, Othoba, Amikini and Deligram. Following this, in the month of victory UR FASHION-online fashion house started its journey as a sister-concern in December 2015.
                            <br/>
                            <br/>
                           <strong> Key Goals: </strong> <br/>
                            Our first goal is to give the buyer a free opportunity to shop online with fidelity, which has already been perfected. Due to the need of the time and the demand of the buyers, our far-reaching goal now is to deliver quality products of both Gents and Ladies fashions to the buyers in a timely manner at reasonable prices. As a result we have cash on delivery service across the country, Wholesale products are being sold in various showrooms, dealership activities are underway in different districts and the company has its own showrooms in several places so that buyers can easily get the products of their choice.
                            <br/>
                            <br/>
                           <strong> Own Identity:</strong><br/>
                            Most of the UR Fashion brand products are made in the company's own factory, but some products are imported from China and India, so there is no compromise on quality. In case of fashion products the company sells with a guarantee and the model / design will be unique, the price will be within the purchasing power of the buyer and the service will be fast. We produce every product very carefully and supply it online with 100% confidence. We set the most affordable prices for each of our products and deliver them at the right time through the use of various reputable Courier Services such as SA Paribahan, Sundarban, Karatoa, Janani, Continental, Bangladesh Parcel, Five Star, Redex Courier, Pathao, Balaka Express in Bangladesh. We have 24/7 service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;