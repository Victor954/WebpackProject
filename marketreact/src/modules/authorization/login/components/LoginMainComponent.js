import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import { ValidatorForm , getValidRule , getLoginValidRule , getPasswordValidRule } from '../../helper/ValidatorForm';
import { setAsChanged } from '../../helper/ValidatorFormDom';

import ValidatedPasswordTextFiled from '../../components/ValidatedPasswordTextFiled';
import ValidatedTextField from '../../components/ValidatedTextField';

import { logining , action_backup_loading } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './LoginMainComponent.module.scss';

export default function LoginMainComponent(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const loginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.data);
    const loadingLoginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.loading);

    const [loginState , setLoginState] = React.useState({
        EmailLogin:{
            textValue: '',
            isChanegd: false
        },
        Password:{
            textValue: '',
            isChanegd: false,
            isVisible: false
        }
    });

    //#region  Установка правил для валидации

    const getEmailLoginValid = (value) => {
        
        const validatorEmail = validator.isEmail(value);

        if(!validatorEmail) {

            return getLoginValidRule(value);
        }

        return getValidRule(validatorEmail , 'Введите Email');
    }

    const validationRules =  {

        EmailLogin: [
            
            (value) => getEmailLoginValid(value),
            (value) => getValidRule(!loginingData.isException , loginingData.msg )
        ],
        Password: [
    
            (value) =>  getPasswordValidRule(value),
            (value) => getValidRule(!loginingData.isException , loginingData.msg )
        ]
    }

    //#endregion

    const { initialValdi , getFormValid} = new ValidatorForm(validationRules);


    const getLastNodeHistory = (location , value = null) => {

        if(location) {

            value = location;
            return getLastNodeHistory(location.state , location);
        }

        return value.from;
    }
    

    const getLoginData = () => {

        const { EmailLogin , Password } = loginState;
        const nameLoginEmail = validator.isEmail(EmailLogin.textValue) ? 'email' : 'login';
        const historyState = getLastNodeHistory(history.location);

        const pathnameRedirect =  (historyState.pathname === '/login') ? '/' : historyState.pathname;

        return {
            ...{ login: '', email: '', password: '' , pathname:pathnameRedirect },
            [nameLoginEmail]: EmailLogin.textValue,
            password: Password.textValue
        }
    }

    
    //#region События DOM

    const onVisibleHandler = (name , isVisible) => {

        setLoginState(prevState => ({
            ...prevState, 
            [name]: { 
                ...prevState[name], 
                isVisible: isVisible
            }
        }));
    }

    const onChangeInputHandler = (e) => { 

        const {value , name} = e.target;

        if(loginingData.isException){
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

    const onClickSubmitForm = (e) => {

        e.preventDefault();
        setAsChanged(loginState , setLoginState);

        if(getFormValid()) {
            dispatch(logining.action_request(getLoginData()));
        }
    }

    //#endregion

    const getProperties = (name) => {
        
        return {
            name:name,
            className: styles['group-inputs'],
            classes:{root: styles['input-filed-root']},
            disabled:loadingLoginingData, 
            filedData: { ...loginState[name] }, 
            initialValdi, 
            onChange:onChangeInputHandler
        }
    }

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off" onSubmit={onClickSubmitForm}>

                <h2 className={styles['title']}>Войти</h2>


                <ValidatedTextField 
                    label = "Логин или Email"
                    {...getProperties("EmailLogin")}/>
                
                <ValidatedPasswordTextFiled 
                    label = "Пароль"
                    onVisible={onVisibleHandler}
                    {...getProperties("Password")}/>


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