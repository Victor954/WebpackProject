import React from 'react';
import HomeContract from './pages/home/HomePageContract';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


export default function App (props) {

  const HomeComponent = HomeContract.PageComponent;
  const rootReducer = combineReducers(HomeContract.store);
  const store = createStore(rootReducer);

  console.log(store.getState());

  return (
    <div>
      <Provider store={store}> 
        <HomeComponent />
      </Provider>
    </div>
  )
}
