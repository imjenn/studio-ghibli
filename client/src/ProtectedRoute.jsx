import React, { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                     <Navigate to="/account" />
                )
            }
        />

    );
}

export default ProtectedRoute;