import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { TextField  , Button} from '@material-ui/core';
import { useLocation , useHistory } from 'react-router-dom';
import validator from 'validator';

import { logining , action_backup_loading } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './LoginMainComponent.module.scss';


class ValidatorForm {

    constructor(textFieldsData)  {
        this._textFieldsData = textFieldsData;
    }

    getState = () => {

        const propertiesArray = this._textFieldsData.map(filedData => [filedData.name , '']);

        const fieldsObject = Object.fromEntries(new Map(propertiesArray));

        return {
            ...fieldsObject,
            errors: {
                ...fieldsObject
            }
        }
    }

    getValid = (validators , name) => {

        for(const {isValidate , textError } of validators) { 
                
            if(!isValidate){
                
                return {
                    name: name,
                    textError: textError,
                    isValid: false
                }
            }
        }

        return {
            name: name,
            textError: '',
            isValid: true
        }
    }

    getAnyValid = (validationRules , state) => {

        const validations = this._textFieldsData.map(filedData => {
            const { name } = filedData;

            return this.getValid(validationRules[name].map(valid => valid(state[name])) , name )
        });

        return {
            validations: validations,
            anyValid: validations.some(valid => !valid.isValid)
        }
    }

    getValidRule = (validatorRule , textError) => {

        return { 
            isValidate: validatorRule, 
            textError: textError
        };
    }
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

    const validatorForm = new ValidatorForm(textFielsData);

    const [loginState , setLoginState] = React.useState(validatorForm.getState());

    const validationRules = {

        loginEmail: [

            (value) => validatorForm.getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => validatorForm.getValidRule(validator.isEmail(value) , 'Это не Email'),
            (value) => validatorForm.getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ],
        password: [

            (value) =>  validatorForm.getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => validatorForm.getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ]
    }

    if(userData.token) {
        //history.replace('/', location.state);
    }

    const onChangeInputHandler = (e , argsValidation) => {

        const { name, value } = e.target;


        setLoginState(prevState => ({...prevState , [name]: value.replace(/\s/g,'') }));

        if(loginingData.form.isException){
            dispatch(action_backup_loading());
        }

        const valid = validatorForm.getValid( argsValidation.map(valid => valid(value)) , name);

        setError(valid);
    }  

    const onSubmitFormHandler = (e) => {

        const { validations , anyValid } = validatorForm.getAnyValid(validationRules , loginState);

        setErrors(validations);

        if(!anyValid){
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
    
    const setErrors = (validations) => {

        validations.forEach(valid => setError(valid));
    }

    const setError = ({name , textError , isValid}) => {

        setLoginState(prevState => {

            return {
                ...prevState , 
                errors: {
                    ...prevState.errors , 
                    [name]: textError
                }
            }
        });
    }



    const getPropsTextField = ({name , label}) => {

        return {
            size:'small',
            variant:'outlined',
            classes:{root: styles['input-filed-root']},
            disabled: loadingLoginingData,
            onChange: e => onChangeInputHandler(e , validationRules[name]),
            value:loginState[name],
            label:label,
            name:name,
            helperText:(loginingData.form.isException) ? loginingData.form.msg : loginState.errors[name],
            error:loginState.errors[name].length > 0
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