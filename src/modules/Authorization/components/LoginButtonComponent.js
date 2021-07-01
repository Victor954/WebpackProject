import React from 'react';

import {
  useHistory,
  useLocation
} from "react-router-dom";

import context from '../context/AuthContext';

export function LoginButton () {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handlerLoginIn =  (loginCallback) => {
        
      loginCallback().then(() => {
        history.replace(from);
      });

    }

    return (
      <div>
        You are not loggined

        <context.Consumer>
          {
            authObj => <button onClick={() => handlerLoginIn(authObj.logIn)}>Login</button>
          }
        </context.Consumer>
      </div>
    )
}
