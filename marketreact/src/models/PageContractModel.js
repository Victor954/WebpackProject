export default class PageContractModel {

    constructor({ PageComponent , levelAccess, menuItemName , reducersObject , saga }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
        this._reducersObject = reducersObject;
        this._saga = saga;
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

    get reducersObject() {
        return this._reducersObject;
    }

    get saga() {
        return this._saga;
    }
}