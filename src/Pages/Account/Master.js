import React, { useEffect } from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom';
import '../../styles/Account/master.scss';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

import DashboardIndex from './Dashboard/Index';
import OrderIndex from './Orders/Index';
// import AddressesIndex from './Address/Index';
// import EditBillingAddress from './Address/EditBillingAddress';
// import EditShippingAddress from './Address/EditShippingAddress';
import AccountDetails from './Account-details/Index';
import PasswordChange from './Account-details/PasswordChange';


const Master = () => {
    const history = useHistory()

    useEffect(() => {
        const header = {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }

        const fetchLoggedUser = async () => {
            try {
                const response = await axios.get(`${apiURL}me`, header)
                localStorage.setItem('user', JSON.stringify(response.data))
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        }

        fetchLoggedUser()
    }, [])

    const doLogout = async () => {
        // Header 
        const header = {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }

        try {
            const response = await axios.get(`${apiURL}logout`, header)
            if (response.status === 200) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                history.push('/')
            }
        } catch (error) {
            if (error) {
                console.log(error.response);
            }
        }
    }

    return (
        <div className="account-master">
            <NavBarComponent />

            <div className="container py-lg-4">
                <div className="row">
                    <div className="col-12">

                        {/* Mobile Page buttona */}
                        <div className="page-links-in-button-mobile d-lg-none">
                            <NavLink type="button" className="btn shadow-sm" exact activeClassName="is-Active" to="/account/">dashboard</NavLink>
                            <NavLink type="button" className="btn shadow-sm" exact activeClassName="is-Active" to="/account/orders">orders</NavLink>
                            {/* <NavLink type="button" className="btn shadow-sm" exact activeClassName="is-Active" to="/account/addersses">addresses</NavLink> */}
                            <NavLink type="button" className="btn shadow-sm" exact activeClassName="is-Active" to="/account/account-details">account details</NavLink>
                            <NavLink type="button" className="btn shadow-sm" exact activeClassName="is-Active" to="/account/password-change">Change password</NavLink>
                            <button
                                type="button"
                                className="btn rounded-0 shadow-sm"
                                onClick={doLogout}
                            >logout</button>
                        </div>

                        <div className="d-flex">
                            {/* Side Menu */}
                            <div className="side-menu px-lg-3 d-none d-lg-block">
                                <NavLink exact activeClassName="is-Active" to="/account/">dashboard</NavLink>
                                <NavLink exact activeClassName="is-Active" to="/account/orders">orders</NavLink>
                                {/* <NavLink exact activeClassName="is-Active" to="/account/addersses">addresses</NavLink> */}
                                <NavLink exact activeClassName="is-Active" to="/account/account-details">account details</NavLink>
                                <NavLink exact activeClassName="is-Active" to="/account/password-change">change password</NavLink>
                                <button
                                    type="button"
                                    className="btn btn-block rounded-0 shadow-none"
                                    onClick={doLogout}
                                >logout</button>
                            </div>

                            {/* Main Menu */}
                            <div className="main-menu flex-fill px-lg-3">
                                <Route exact path="/account/" component={DashboardIndex} />
                                <Route exact path="/account/orders" component={OrderIndex} />
                                {/* <Route exact path="/account/addersses" component={AddressesIndex} /> */}
                                {/* <Route exact path="/account/addersses/edit/billing" component={EditBillingAddress} /> */}
                                {/* <Route exact path="/account/addersses/edit/shipping" component={EditShippingAddress} /> */}
                                <Route exact path="/account/account-details" component={AccountDetails} />
                                <Route exact path="/account/password-change" component={PasswordChange} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Master;