export default class ModuleContractModel {

    constructor({ MainComponent  , reducers , saga , moduleCode }) {

        this._MainComponent = MainComponent;
        this._reducers = reducers;
        this._saga = saga;
        this._moduleCode = moduleCode;
    }

    get MainComponent() {
        return this._MainComponent;
    }

    get reducers() {
        return this._reducers;
    }

    get saga() {
        return this._saga;
    }

    get moduleCode() {
        return this._moduleCode;
    }
}