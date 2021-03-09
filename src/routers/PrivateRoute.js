import React from 'react'
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAthenticated, component: Component, ...rest
}) => {

    
    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            component={
                (props) => (
                    (isAthenticated) ? (<Component {...props} />) : (<Redirect to="/login" />)
                )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
