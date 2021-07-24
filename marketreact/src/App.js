import React from 'react';
import HomeContract from './pages/home/index';

import { createStore , applyMiddleware , compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

export default function App (props) {

  const HomeComponent = HomeContract.PageComponent;

  const rootReducer =  HomeContract.getReducer();
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer , 
    compose (
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

  sagaMiddleware.run(HomeContract.getSaga());

  return (
    <div>
      <Provider store={store}> 
        <HomeComponent />
      </Provider>
    </div>
  )
}
