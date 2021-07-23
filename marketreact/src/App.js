import React from 'react';
import HomeContract from './pages/home/index';

import { createStore, combineReducers , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

export default function App (props) {

  const HomeComponent = HomeContract.PageComponent;
  const rootReducer = combineReducers(HomeContract.reducersObject);
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer , applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(HomeContract.saga);

  console.log(store.getState());

  return (
    <div>
      <Provider store={store}> 
        <HomeComponent />
      </Provider>
    </div>
  )
}
