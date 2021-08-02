import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { TextField  , Button} from '@material-ui/core';
import { useLocation , useHistory } from 'react-router-dom';
import validator from 'validator';

import { logining , action_backup_loading } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './LoginMainComponent.module.scss';


class ValidatorForm {

    constructor(textFieldsData , validationRules)  {
        this._textFieldsData = textFieldsData;
        this._validationRules = validationRules;
        this._cache = {}
    }

    getState = () => {

        const propertiesArray = this._textFieldsData.map(filedData => [filedData.name , '']);
        const fieldsObject = Object.fromEntries(new Map(propertiesArray));

        return {
            ...fieldsObject
        }
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
    }

    getValid = (value , name) => {

        const validators = this._validationRules[name].map(valid => valid(value));
        const changed = (this._cache[name] === undefined) ? false : this._cache[name].isChanged;

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

const getValidRule = (validatorRule , textError) => {

    return { 
        isValidate: validatorRule, 
        textError: textError
    };
}

export default function LoginMainComponent(props) {

    const dispatch = useDispatch()

    const history = useHistory();
    const location = useLocation();
    
    const userData = useSelector((state) => state.mainData.userServiceModel.userData.data);
    const loginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.data);
    const loadingLoginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.loading);

    const textFielsData = [
        {
            name:'loginEmail',
            label: 'Логин или Email'
        },
        {
            name:'password',
            label: 'Пароль'
        }
    ]

    const validationRules = {

        loginEmail: [

            (value) => getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(validator.isEmail(value) , 'Это не Email'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ],
        password: [

            (value) =>  getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ]
    }

    const validatorForm = new ValidatorForm(textFielsData ,validationRules);

    const [loginState , setLoginState] = React.useState(validatorForm.getState());


    const onChangeInputHandler = (e) => {

        const { name, value } = e.target;


        setLoginState(prevState => ({...prevState , [name]: value.replace(/\s/g,'') }));

        if(loginingData.form.isException){
            dispatch(action_backup_loading());
        }
    }  

    const onSubmitFormHandler = (e) => {

        if(validatorForm.getIsValidate()){
            dispatch(logining.action_request(getLoginData()));
        }

    }

    const getLoginData = () => {

        const { loginEmail , password } = loginState;
        const nameLoginEmail = validator.isEmail(loginEmail) ? 'email' : 'login';

        return {
            ...{ login: '', email: '', password: '' },
            [nameLoginEmail]: loginEmail,
            password: password
        }
    }

    const getPropsTextField = ({name , label}) => {

        const value = loginState[name];
        const validate = validatorForm.getValid(value, name);

        const onChangeHandler = (e) => {

            validatorForm.setChanged(true, name);
            onChangeInputHandler(e);
        }

        return {
            size:'small',
            variant:'outlined',
            classes:{root: styles['input-filed-root']},
            disabled: loadingLoginingData,
            onChange: onChangeHandler,
            value:value,
            label:label,
            name:name,
            helperText:(validate.isChanged) ? validate.textError : '',
            error:!validate.isValid && validate.isChanged
        }
    } 

    const getFields = (textFielsData) => {

        return textFielsData.map(fieldData => {

            return (<div className={styles['group-inputs']} key={fieldData.name}>
                <TextField { ...getPropsTextField(fieldData) }>
                </TextField>
            </div>)
        });
    }

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off">

                <h2 className={styles['title']}>Войти</h2>

                { getFields(textFielsData) }

                <div className={styles['group-button']}>
                    <Button 
                        disabled={loadingLoginingData}
                        color="primary" 
                        variant="contained"
                        onClick={onSubmitFormHandler}
                        className={styles['sender-btn']}>Войти</Button>
                </div>
            </form>
        </div>
    )
}