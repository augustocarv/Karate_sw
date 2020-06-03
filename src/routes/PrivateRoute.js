import React from 'react'

import { Route, Redirect } from 'react-router'

const PrivateRoute = props => {
    const isLogged = !!sessionStorage.getItem('token')
    return isLogged ? <Route {...props} /> : <Redirect to="/Login" />
}

export default PrivateRoute