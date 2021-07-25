import React from 'react';
import HomeContract from './pages/home/index';

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



function PrivateRoute({ pageContract , store , rootMainReducer, ...rest }) {

  const rootModuleReducer =  pageContract.getReducer();
  const Component = pageContract.PageComponent;

  const rootReducer = combineReducers({
    mainData:rootMainReducer ,
    modulesData: rootModuleReducer
  });

  //let history = useHistory();
  //let location = useLocation();
  //let { from } = location.state || { from: { pathname: "/" } };

  store.replaceReducer(rootReducer);

  const auth = useSelector((state) => state.mainData.authServiceModel.authUserData.data.token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
            <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
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
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    (state , action) => state, 
    compose (
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

  sagaMiddleware.run(creatorStore.getSaga());

  return (

    <Router>

    <Switch>
        <Provider store={store}>
          <PrivateRoute  exact path="/" pageContract={ HomeContract } store={ store } rootMainReducer ={rootReducer} />
          <Route exact path="/login">
              <div>wow</div>
          </Route>
        </Provider>
    </Switch>

    </Router>
  )
}
