export const getValidRule = (validatorRule , textError) => {

    return { 
        isValidate: validatorRule, 
        msg: textError
    };
}

export class ValidatorForm {

    constructor(validationRules) {

        this._validationRules = validationRules;
        this._cache = this._getCache(Object.keys(validationRules));
    }

    _getCache = (fieldsName) => {

        let data = {};

        fieldsName.forEach(name => {
            data = {
            ...data,
            [name]: {
                isValidate: true,
                msg : ''
            }}
        });
        
        return data;
    }

    setCache = (name  , msg , isValidate) => {

        this._cache[name].msg = msg;
        this._cache[name].isValidate = isValidate;
    }

    getFeildValid = (value , name) => {

        const validator = this._validationRules[name]
            .map(rule => rule(value))
            .find(validation => !validation.isValidate);

        if(validator !== undefined) return validator;

        return {
            isValidate: true,
            msg : ''
        }
 
    }

    getFormValid = () => {
        return Object.values(this._cache).every(state => state.isValidate);
    }

}