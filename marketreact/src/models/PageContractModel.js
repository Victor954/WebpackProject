export default class PageContractModel {

    constructor({ PageComponent , levelAccess, menuItemName , store }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
        this._store = store;
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

    get store() {
        return this._store;
    }
}