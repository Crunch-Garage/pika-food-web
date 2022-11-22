import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { Login } from '../pages';
import dummyData from '../utils/dummyData'

function PrivateRoute({children,route}) {
    const { authenticated } = dummyData?.userProfile
    const location = useLocation()

    /*if the page does not require any permission*/
    if (!route?.permission) {
        return children;
    } else {

        /**check if user is authenticated */
        if (authenticated) {
            /**show page */
            return children;
        } else {
            /**redirect to login or show login as context provider or login as child */
             return <Login/> 
            // <Navigate to="/login" state={{from:location}} replace/>
        }

    }

}

export default PrivateRoute