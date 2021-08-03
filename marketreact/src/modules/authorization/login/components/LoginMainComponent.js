import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { TextField  , Button} from '@material-ui/core';
import { useLocation , useHistory } from 'react-router-dom';
import validator from 'validator';
import { ValidatorForm , getValidRule } from '../../helper/ValidatorForm';

import { logining , action_backup_loading } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './LoginMainComponent.module.scss';

export default function LoginMainComponent(props) {

    const dispatch = useDispatch()

    //const history = useHistory();
    //const location = useLocation();
    
    //const userData = useSelector((state) => state.mainData.userServiceModel.userData.data);
    const loginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.data);
    const loadingLoginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.loading);

    const [loginState , setLoginState] = React.useState({
        EmailLogin:{
            textValue: '',
            isChanegd: false
        },
        Password:{
            textValue: '',
            isChanegd: false
        }
    });

    const validationRules =  {

        EmailLogin: [
    
            (value) => getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(validator.isEmail(value) , 'Это не Email'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ],
        Password: [
    
            (value) =>  getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ]
    }

    const {setCache , getFeildValid , getFormValid} = new ValidatorForm(validationRules);


    const getLoginData = () => {

        const { EmailLogin , Password } = loginState;
        const nameLoginEmail = validator.isEmail(EmailLogin.textValue) ? 'email' : 'login';

        return {
            ...{ login: '', email: '', password: '' },
            [nameLoginEmail]: EmailLogin.textValue,
            password: Password.textValue
        }
    }

    const SetAsChanged = () => {

        for (const key of Object.keys(loginState)) {

            setLoginState(prevState => ({
                ...prevState, 
                [key]: { 
                    ...prevState[key], 
                    isChanegd: true,
                }
            }));
        }
    }

    

    const OnChangeInputHandler = (e) => { 

        const {value , name} = e.target;

        if(loginingData.form.isException){
            dispatch(action_backup_loading());
        }

        setLoginState(prevState => ({
            ...prevState, 
            [name]: { 
                ...prevState[name], 
                textValue: value.replace(/\s/g,''),
                isChanegd: true
            }
        }));

    }

    const OnClickSubmitForm = (e) => {

        e.preventDefault();
        SetAsChanged();

        if(getFormValid()) {
            dispatch(logining.action_request(getLoginData()));
        }
    }

    const getField = (name , label ) => {

        const { textValue  , isChanegd } = loginState[name];

        const { msg , isValidate }  = getFeildValid(textValue, name);
        setCache(name , msg , isValidate);

        return (
            <div className={styles['group-inputs']}>
                <TextField
                    size='small'
                    variant='outlined'
                    classes={{root: styles['input-filed-root']}}
                    name={name} 
                    label={label}
                    disabled={loadingLoginingData} 
                    value={textValue} 
                    helperText={(isChanegd) ? msg : ''}
                    onChange={OnChangeInputHandler}
                    error={!isValidate && isChanegd}
                ></TextField>
            </div>
        )
    }

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off" onSubmit={OnClickSubmitForm}>

                <h2 className={styles['title']}>Войти</h2>

                { getField('EmailLogin' , 'Логин или Email') }
                { getField('Password' , 'Пароль') }

                <div className={styles['group-button']}>
                    <Button 
                        disabled={loadingLoginingData}
                        color="primary"
                        type="submit"
                        variant="contained"
                        className={styles['sender-btn']}>Войти</Button>
                </div>
            </form>
        </div>
    )
}