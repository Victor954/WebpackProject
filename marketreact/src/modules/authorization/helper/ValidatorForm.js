const cacheValidation = {};

export class ValidatorForm {

    constructor(validationRules)  {

        this._cache = cacheValidation
        this._validationRules = validationRules;
    }

    getIsValidate = () => {

        let result = true;

        for(const key in this._cache) {

            const value = this._cache[key];
            value.isChanged = true;

            if(!value.isValid){
                result = false;
            }
        }

        return result;
    }

    setChanged = (value ,name) => {
        this._cache[name].isChanged = value;
        console.log(name ,this._cache[name] ,'set');
    }

    getValid = (value , name) => {

        const validators = this._validationRules[name].map(valid => valid(value));
        const changed = (this._cache[name] === undefined) ? false : this._cache[name].isChanged;

        console.log(name , changed ,this._cache);

        for(const {isValidate , textError } of validators) { 
                
            if(!isValidate){
                
                this._setCache(name , {
                    name: name,
                    textError: textError,
                    isValid: false,
                    isChanged: changed
                });

                return this._cache[name];
            }
        }

        this._setCache(name , {
            name: name,
            textError: '',
            isValid: true,
            isChanged: changed
        });

        return this._cache[name];
    }

    _setCache = (name , valid) => {
        this._cache[name] = valid;
    }
}