import CreatorStore from './ContractStore';

export default class PageContractModel {

    constructor({ PageComponent , levelAccess, menuItemName , menuLink , showMode , modulesContracts , servicesContracts }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
        this._menuItemName = menuItemName;
        this._menuLink = menuLink;
        this._showMode = showMode;

        this._modulesContracts = modulesContracts;
        this._servicesContracts = servicesContracts;

        this._contractStore = new CreatorStore({ modulesContracts: this._modulesContracts,  servicesContracts: this._servicesContracts });
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

    get menuLink () {
        return this._menuLink;
    }

    get showMode() {
        return this._showMode;
    }

    getReducer = () => {
        
        return this._contractStore.getReducer();
    }
    
    getSaga = () => {
        
        return this._contractStore.getSaga();
    }

    getComponentByCode = (code) => {
        const moduleContract = this._modulesContracts.find(contract => contract.code === code);

        if(!moduleContract){
            throw new Error('Модуль с таким code не подключен');
        }

        return moduleContract.MainComponent;
    }
}