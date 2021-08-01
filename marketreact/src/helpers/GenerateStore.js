import CreatorStore from './contracts/ContractStore';
import { createStore , applyMiddleware , compose , combineReducers} from 'redux';
import createSagaMiddleware  from 'redux-saga';

export const getReduxData = (servicesContracts , pagesContracts) => {

    const mainServicesStore = new CreatorStore({ servicesContracts: servicesContracts });
    const pagesCreatorsStore = pagesContracts.map(pageContract => pageContract.creatorStore);

    const sagaMiddleware = createSagaMiddleware();
  
    const mainReducresObject = {
      mainData: mainServicesStore.getReducer()
    }

    const entiresArray = pagesCreatorsStore.map((creatorStore , index) => [`${pagesContracts[index].pageCode}PageData` , creatorStore.getReducer()]);
    const pagesReducers = Object.fromEntries(new Map(entiresArray));
    
    const reducresObject = {...mainReducresObject , ...pagesReducers};

    const store = createStore(
      combineReducers(reducresObject), 
      compose (
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      ));
    
    
    [...pagesCreatorsStore , mainServicesStore].forEach(creatorStore => sagaMiddleware.run(creatorStore.getSaga()));
      
    return {
      store: store,
      reducresObject: reducresObject,
      sagaMiddleware: sagaMiddleware
    }
}