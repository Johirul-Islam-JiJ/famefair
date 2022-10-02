import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../styles/Account/dashboard.scss';
import axios from 'axios';
import { apiURL } from '../../../utils/apiURL';

import LoadingComponent from '../../../Components/Loader';

const Index = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    // Header 
    const header = {
        headers:
        {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    useEffect(() => {
        // Fetch Loggedin User
        const fetchLoggedUser = async () => {
            try {
                const response = await axios.get(`${apiURL}me`, header)
                setUser(response.data)
                setLoading(false)
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        }
        fetchLoggedUser()
    }, [header])

    const doLogout = async () => {
        try {
            const response = await axios.get(`${apiURL}logout`, header)
            if (response.status === 200) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                history.push('/')
            }
        } catch (error) {
            if (error) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                history.push('/')
                console.log(error.response)
            }
        }
    }

    return (
        <div className="dashboard">
            {isLoading ? <LoadingComponent /> : null}
            <div>
                <div className="header text-center mt-3">
                    <h5>my account</h5>
                </div>
                {user ?
                    <div className="body mb-4">
                        <p className="mb-4">Hello <span className="text-info">{user.email}</span> (not <span className="text-info">{user.email}</span> ? <span onClick={doLogout}>Log out )</span></p>
                        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                        <div className="text-center my-4">
                            <Link
                                to="/"
                                type="button"
                                className="btn shadow-none text-white"
                            >Return to shop</Link>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Index;