import React from 'react';
import context from '../context/AuthContext';

export function LoginOutButton() {

    const handlerLoginOut =  (loginOutCallback) => {
        
        loginOutCallback().then(() => { });
      }

    return (
      <context.Consumer>
        {
          authObj => <button onClick={() => handlerLoginOut(authObj.logOut)}>Out</button>
        }
      </context.Consumer>
    )
  }