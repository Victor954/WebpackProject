import HomeContract from './pages/home';
import LoginContract from './pages/login';

import AuthContract from './services/authService'

import React from 'react';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router,  Switch } from "react-router-dom";
import { LoaderRoute , PrivateRoute } from './helpers/routing/ReduxRoute';
import { getReduxData } from './helpers/GenerateStore';

const servicesContracts = [ AuthContract ]

export default function App (props) {

  const data = getReduxData(servicesContracts);


  return (

    <Router>

    <Switch>
        <Provider store={data.store}>
          <PrivateRoute exact path="/" pageContract={ HomeContract } reduxData={ data } />
          <LoaderRoute exact path="/login"  pageContract={ LoginContract } reduxData={ data } />
        </Provider>
    </Switch>

    </Router>
  )
}
