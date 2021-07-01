import React from 'react';

import {
  Route,
  Redirect
} from "react-router-dom";

import context from '../context/AuthContext';

  function PrivateRoute({ children, roleAccess, ...rest }) {
    
    const routeRender = (props , authData) => {

      if(authData.user == null){
        return null;
      }
      const authRoleAccess = authData.user.role.roleAccess
      const pathName = (authRoleAccess > 0) ? "404" :  "/login";

      if(authRoleAccess < roleAccess){

        return <Redirect to={{ pathname: pathName, state: { from: props.location } }} />
      }

      return children;
    }


    return (
      <context.Consumer>
      {
        routhData => {

          return ( <Route
            {...rest}
            render={(props) => routeRender(props, routhData)}
          />)
        }
      }
      </context.Consumer>

    );
  }

  export default PrivateRoute;