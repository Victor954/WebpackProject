import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
export default class PageContractModel {

    constructor({ PageComponent , levelAccess, menuItemName , pathUrl , modulesContracts , servicesContracts }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
        
        this._modulesContracts = modulesContracts;
        this._servicesContracts = servicesContracts;
    }

    get PageComponent() {
        return this._PageComponent;
    }

    get levelAccess() {
        return this._levelAccess;
    }

    get menuItemName() {
        return this._menuItemName;
    }

    _getReducerFromContracts(contracts) {

        const entiresArray = contracts.map(contract => [contract.code , contract.reducer]);

        return Object.fromEntries(new Map(entiresArray));
    }

    getReducer = () => {
   
        return combineReducers({
            ...this._getReducerFromContracts(this._modulesContracts),
            ...this._getReducerFromContracts(this._servicesContracts)
        });
    }
    
    getSaga = () => {
        
        const context = this;

        return function* rootSaga() {
            yield all( context._servicesContracts.map(contract => contract.saga()) );
          }
    }

    getComponentByCode = (code) => {
        const moduleContract = this._modulesContracts.find(contract => contract.code === code);

        if(!moduleContract){
            throw new Error('Модуль с таким code не подключен');
        }

        return moduleContract.MainComponent;
    }
}