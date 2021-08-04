import validator from 'validator';

export const getValidRule = (validatorRule , textError) => {

    return { 
        isValidate: validatorRule, 
        msg: textError
    };
}

export const getPasswordValidRule = (value) => {

    const passwordValidRules = [
        getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
        getValidRule(validator.isAlphanumeric (value) , 'Пароль  не должен содержать спецсимволы'),
        getValidRule(!validator.isNumeric(value), 'Пароль должен содержать буквы'),
        getValidRule(!validator.isAlpha (value), 'Пароль должен содержать цифры'),
        getValidRule(validator.isLength (value , { min: 8 }) , 'Пароль не должен быть короче 8 символов'),
        getValidRule(validator.isLength (value , { max: 24 }) , 'Пароль не должен быть больше 24 символов'),
    ];

    return getRule(passwordValidRules);
}

export const getLoginValidRule = (value) => {

    const emailLoginRules = [
        getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
        getValidRule(validator.isAlphanumeric(value) , 'Логин не должен содержать спецсимволы'),
        getValidRule(!validator.isNumeric(value), 'Логин должен содержать буквы'),
        getValidRule(validator.isLength (value , { min: 3 }) , 'Логин не должен быть короче 3 символов'),
        getValidRule(validator.isLength (value , { max: 16}) , 'Логин не должен быть больше 16 символов'),
    ];
    
    return getRule(emailLoginRules);
}

const getRule = (rules) => {

    const findedRule = rules.find(rule => !rule.isValidate); 

    if(findedRule) return findedRule;

    return getValidRule(true , '');
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

    initialValdi = (value , name) => {
        const { msg , isValidate }  = this.getFeildValid(value, name);
        this.setCache(name , msg , isValidate);

        return {msg, isValidate}
    }

    getFormValid = () => {
        return Object.values(this._cache).every(state => state.isValidate);
    }

}