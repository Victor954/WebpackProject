import CreatorStore from './ContractStore';

export default class PageContractModel {

    constructor({ PageComponent , levelAccess, pageCode , pageMenuPlacement , IconMaterialsComponent , menuItemName , menuLink , showMode , modulesContracts , servicesContracts }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
        this._menuItemName = menuItemName;
        this._menuLink = menuLink;
        this._showMode = showMode;

        this._pageCode = pageCode;
        this._pageMenuPlacement = pageMenuPlacement;
        this._IconMaterialsComponent = IconMaterialsComponent;

        this._modulesContracts = modulesContracts;
        this._servicesContracts = servicesContracts;

        this._contractStore = new CreatorStore({ modulesContracts: this._modulesContracts,  servicesContracts: this._servicesContracts });
    }

    get pageCode() {
        return this._pageCode;
    }

    get getPageMenuPlacement() {
        return this._pageMenuPlacement;
    }

    get IconMaterialsComponent() {
        return this._IconMaterialsComponent;
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

    get creatorStore() {
        return  this._contractStore;
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