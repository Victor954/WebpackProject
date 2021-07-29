import HomeContract from './pages/home';
import LoginContract from './pages/login';
import HeaderContract from './pages/header'; 

import AuthContract from './services/authService'

import React from 'react';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router,  Switch  } from "react-router-dom";
import { LoaderRoute , PrivateRoute } from './helpers/routing/ReduxRoute';
import { getReduxData } from './helpers/GenerateStore';

import ShowModeEnum from './helpers/models/ShowModeEnum';

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const servicesContracts = [ AuthContract ]
const pageContracts = [HomeContract , LoginContract];

export default function App (props) {

  const data = getReduxData(servicesContracts);

  const getProps = (contract) => {

    return {
      exact:true,
      path:contract.menuLink,
      pageContract:contract,
      reduxData:data
    }
  }


  const getRouties = () => {

    return pageContracts.map(contract => {

      if(contract.showMode === ShowModeEnum.show) {
        return <LoaderRoute {...getProps(contract)} />
      } else {
        return <PrivateRoute {...getProps(contract)} />
      }

    });
  }

  return (
    
    <Router>
      <StylesProvider jss={jss}>
        <HeaderContract.PageComponent  contracts={pageContracts}/>

        <Switch>
  
          <Provider store={data.store}>
            <PrivateRoute exact path="/" pageContract={ HomeContract } reduxData={ data } />
            <LoaderRoute exact path="/login"  pageContract={ LoginContract } reduxData={ data } />
          </Provider>
        </Switch>
      </StylesProvider>


    </Router>
  )
}

