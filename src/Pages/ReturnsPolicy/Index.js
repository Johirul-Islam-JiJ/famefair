import React from 'react'
import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

function Index() {
    return (
        <div className="about-us">
            <NavbarComponent />

            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>Returns Policy</h1>
                        
                    </div>
                </div>
            </div>

            {/* Contact Main */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center text-lg-left">
                                <h1>Returns Policy</h1>
                            </div>
                            <p style={{ fontSize: '13px' }} >
                            যে কোনো কারণে ফেরত ব বদল করা যায়, তবে সেটা হাতে পাবার ২৪ ঘন্টার মধ্যে জানাতে হবে। প্রোডাক্ট পানিতে ভেজালে ফেরত নেওয়া হবেনা। ঢাকাতে ডেলিভারি ম্যান এর সামনে প্রোডাক্ট দেখে নিবেন। ফেরত চার্জ ক্রেতাকে বহন করতে হবে।
                            <br/>
                            <br/>
                            If your product is defective/damaged or incorrect/incomplete at the time of delivery, please contact us. Your product may be eligible for refund or replacement depending on the product category and condition.
                            <br/>
                            <br/>
                            No change will be applicable which are already delivered to customer. If product quality or quantity problem found then customer can refuse/cancel their order on delivery time with the presence of our delivery person.
                            <br/>
                            <br/>
                            If you wash your products then you are not eligible for return.
                            <br/>
                            <br/>
                            Please note that some products are not eligible for a return if the product is “No longer needed”
                            <br/>
                            <br/>
                           <strong> Refunds Policy</strong> <br/>
                            If your product is eligible for a refund, you can choose your preferred refund method. The shipping fee is not refunded along with the amount paid for your returned product.

                           



                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}



export default Index
