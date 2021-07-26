import React from 'react';
import HomeContract from './pages/home';
import LoginContract from './pages/login';


import { createStore , applyMiddleware , compose , combineReducers} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { all } from 'redux-saga/effects';
import { Provider , useSelector } from 'react-redux';
import { useLocation , useHistory } from 'react-router-dom';

import AuthContract from './services/authService'

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";



function PrivateRoute({ ...rest }) {

  const auth = useSelector((state) => state.mainData.authServiceModel.authUserData.data.token);
  let location = useLocation();

  if(location.pathname == "/login" ) {
    return null;
  }

  if (!auth) {

    return <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
    />
  } else {

    return (
      <ReduxRoute 
      {...rest} />
    );
  }


}

const ReduxRoute = ({pageContract , reduxData , ...rest}) => {

    const Component = pageContract.PageComponent;
    const { store ,  reducresObject } = reduxData;

    reducresObject.pageData = pageContract.getReducer();

    store.replaceReducer(combineReducers(reducresObject));
    
    return (<Route {...rest}>
      <Component />
    </Route>)
}

class CreatorStore {

  constructor(contracts){

    this._contracts = contracts;
  }

  _getReducerFromContracts = (contracts) => {

    const entiresArray = contracts.map(contract => [contract.code , contract.reducer]);

    return Object.fromEntries(new Map(entiresArray));
  }

  getReducer () {

    return combineReducers({
        ...this._getReducerFromContracts(this._contracts)
    });
  }

  getSaga () {

    const context = this;

    return function* rootSaga() {
        yield all( context._contracts.map(contract => contract.saga()) );
      }
  }
}


export default function App (props) {

  const servicesContracts = [ AuthContract ]

  const creatorStore = new CreatorStore(servicesContracts)

  const rootReducer =  creatorStore.getReducer();
  const sagaMiddleware = createSagaMiddleware();

  const reducresObject = {
    mainData: rootReducer
  }

  const store = createStore(
    combineReducers(reducresObject), 
    compose (
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

  sagaMiddleware.run(creatorStore.getSaga());
    
  const reduxData = {
    store: store,
    reducresObject: reducresObject
  }

  return (

    <Router>

    <Switch>
        <Provider store={store}>
          <PrivateRoute  exact path="/" pageContract={ HomeContract } reduxData={ reduxData } />
          <ReduxRoute exact path="/login"  pageContract={ LoginContract } reduxData={ reduxData } />
        </Provider>
    </Switch>

    </Router>
  )
}
