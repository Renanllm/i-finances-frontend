import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SecurityService from '../../services/SecurityService';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!SecurityService.isAutenticado()) {
                return <Redirect to={{ pathname: '/' }} />
            }
            // state: { from: props.location }
            return <Component {...props} />
        }}
    />
);

export default PrivateRoute;