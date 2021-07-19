export default class PageContractModel {

    constructor({ PageComponent , levelAccess, menuItemName }) {

        this._PageComponent = PageComponent;
        this._levelAccess = levelAccess;
        this._menuItemName = menuItemName;
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
}