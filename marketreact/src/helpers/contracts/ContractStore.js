import { all } from 'redux-saga/effects';
import { combineReducers} from 'redux';

export default class CreatorStore {

    constructor({ modulesContracts = [], servicesContracts = [] }){
  
      this._modulesContracts = modulesContracts.filter(contract => contract.reducer);
      this._servicesContracts = servicesContracts;

    }
  
    _getReducerFromContracts = (contracts) => {
  
      const entiresArray = contracts.map(contract => [contract.code , contract.reducer]);
        
      return Object.fromEntries(new Map(entiresArray));
    }
  
    getReducer () {
        
        const reducersObj = {
          ...this._getReducerFromContracts(this._modulesContracts),
          ...this._getReducerFromContracts(this._servicesContracts)
        }

        if(Object.keys(reducersObj).length > 0){
            return combineReducers(reducersObj);
        }

        return null;
    }
  
    getSaga () {
  
      const context = this;
  
      return function* rootSaga() {
          yield all( context._servicesContracts.filter(contract => contract.saga).map(contract => contract.saga()) );
        }
    }
  }
  