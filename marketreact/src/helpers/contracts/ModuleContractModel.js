export default class ModuleContractModel {

    constructor({ MainComponent  , reducer  , code }) {

        this._MainComponent = MainComponent;
        this._reducer = reducer;
        this._code = code;
    }

    get MainComponent() {
        return this._MainComponent;
    }

    get reducer() {
        return this._reducer;
    }

    get code() {
        return this._code;
    }
}