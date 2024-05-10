import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
    return (
        <div className="justify-center mx-auto text-center min-h-min">
        <span className="loading loading-dots loading-sm"></span>
    </div>
    );
}
      if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} />;
   
};


PrivateRoute.propTypes = {
    children: PropTypes.node 
};
export default PrivateRoute;