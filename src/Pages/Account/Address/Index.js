import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Account/addresses.scss';

const Index = () => {
    return (
        <div className="address-index">
            <div className="header text-center mt-3">
                <h5>my addresses</h5>
            </div>

            <div className="body mb-4">
                <p className="text-muted mb-4">The following addresses will be used on the checkout page by deafult.</p>

                <div className="row">

                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                        <div className="d-flex pb-2 border-bottom title mb-3">
                            <div>
                                <h5>billing address</h5>
                            </div>
                            <div className="ml-auto">
                                <Link
                                    to="/account/addersses/edit/billing"
                                    type="button"
                                    className="btn btn-light rounded-0 shadow-none btn-sm"
                                >edit</Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="content">
                            <p>golam rabbi</p>
                            <p>natore, jessior</p>
                            <p>jessior</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="d-flex pb-2 border-bottom title mb-3">
                            <div>
                                <h5>shipping address</h5>
                            </div>
                            <div className="ml-auto">
                                <Link
                                    to="/account/addersses/edit/shipping"
                                    type="button"
                                    className="btn btn-light rounded-0 shadow-none btn-sm"
                                >edit</Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="content">
                            <p>golam rabbi</p>
                            <p>natore, jessior</p>
                            <p>jessior</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;