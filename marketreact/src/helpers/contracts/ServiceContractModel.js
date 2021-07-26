export default class ServiceContractModel {

    constructor({reducer , saga , code }) {

        this._reducer = reducer;
        this._saga = saga;
        this._code = code;
    }

    get saga () {
        return this._saga;
    }

    get reducer() {
        return this._reducer;
    }

    get code() {
        return this._code;
    }
}