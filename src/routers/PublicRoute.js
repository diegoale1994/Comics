import React from 'react'
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types'

export const PublicRoute = ({
    isAthenticated, component: Component, ...rest
}) => {
    return (
        <Route {...rest}
            component={
                (props) => (
                    (!isAthenticated) ? (<Component {...props} />) : (<Redirect to="/" />)
                )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
