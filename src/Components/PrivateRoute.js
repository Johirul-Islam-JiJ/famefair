import React from 'react';
import { checkIfLoggedIn } from '../utils/Authenticate';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const loggedIn = checkIfLoggedIn()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/"
                            }}
                        />
                    )
            }
        />
    );
}