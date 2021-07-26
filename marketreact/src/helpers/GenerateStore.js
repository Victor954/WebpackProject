import CreatorStore from './contracts/ContractStore';
import { createStore , applyMiddleware , compose , combineReducers} from 'redux';
import createSagaMiddleware  from 'redux-saga';

export const getReduxData = (servicesContracts) => {

    const creatorStore = new CreatorStore({ servicesContracts: servicesContracts });
    const sagaMiddleware = createSagaMiddleware();
  
    const reducresObject = {
      mainData: creatorStore.getReducer()
    }
  
    const store = createStore(
      combineReducers(reducresObject), 
      compose (
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      ));
  
    sagaMiddleware.run(creatorStore.getSaga());
      
    return {
      store: store,
      reducresObject: reducresObject,
      sagaMiddleware: sagaMiddleware
    }
}