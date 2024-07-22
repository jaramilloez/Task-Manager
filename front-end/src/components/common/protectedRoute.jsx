import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from './../../services/authService';

const ProtectedRoute = ({ path, component: Component }) => {
    return <Route 
        path={ path } 
        render={ props => {
            if(!getCurrentUser()) return <Redirect to='/logIn' />
            return <Component { ...props } />
        }}
    />
}
 
export default ProtectedRoute;