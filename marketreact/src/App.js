import HomeContract from './pages/home';
import LoginContract from './pages/login';
import HeaderContract from './pages/header';
import CartContract from './pages/cart';

import UserContract from './services/userService'
import MainContract from './services/mainService'

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { LoaderRoute , Redirector , PriveteUserRoute } from './helpers/routing/ReduxRoute';
import { getReduxData } from './helpers/GenerateStore';

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: 'jss-insertion-point'
});

const loadPagesContracts = [HomeContract, LoginContract];

const mainServicesContracts = [UserContract , MainContract]
const mainPagesContracts = [HeaderContract];

export default function App(props) {

  const data = getReduxData(mainServicesContracts, mainPagesContracts);

  return (
    <Router>
      <StylesProvider jss={jss}>
        <Provider store={data.store}>
          <HeaderContract.PageComponent contracts={loadPagesContracts} />
          <Switch>
              
              <Redirector>

              <PriveteUserRoute path="/cart" pageContract={CartContract} reduxData={data} />
              <LoaderRoute exact path="/" pageContract={HomeContract} reduxData={data} />
              <LoaderRoute exact path="/login" pageContract={LoginContract} reduxData={data} />

              </Redirector>
          </Switch>
        </Provider>
      </StylesProvider>
    </Router>
  )
}

