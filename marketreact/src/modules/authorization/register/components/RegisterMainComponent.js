import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {  Button } from '@material-ui/core';
import validator from 'validator';

import { ValidatorForm , getValidRule, getLoginValidRule , getPasswordValidRule } from '../../helper/ValidatorForm';
import { setAsChanged } from '../../helper/ValidatorFormDom';
import ValidatedPasswordTextFiled from '../../components/ValidatedPasswordTextFiled';
import ValidatedTextField from '../../components/ValidatedTextField';
import { checkUniqueEmail } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './RegisterMainComponent.module.scss';

export default function RegisterMainComponent(props) {

    const dispatch = useDispatch();

    const getAuthServiceModel = (state) => state.loginPageData.authorizationServiceModel;

    const loadingLoginingData = useSelector((state) => getAuthServiceModel(state).loginingData.loading);
    const checkEmail = useSelector((state) => getAuthServiceModel(state).checkEmailUniqueData.data);
    const loadingCheckingEmail = useSelector((state) => getAuthServiceModel(state).checkEmailUniqueData.loading);

    const [registerState , setRegisterState] = React.useState({
        Email:{
            textValue: '',
            isChanegd: false
        },
        Login:{
            textValue: '',
            isChanegd: false
        },
        Password:{
            textValue: '',
            isChanegd: false,
            isVisible: false
        },
        RepeatPassword:{
            textValue: '',
            isChanegd: false,
            isVisible: false
        }
    });


    const validationRules =  {

        Email: [        
            (value) =>  getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(validator.isEmail(value) , 'Введите Email'),
            (value) => getValidRule(!checkEmail.isException , checkEmail.msg)
        ],
        Login: [
            (value) => getLoginValidRule(value)
        ],
        Password: [
            (value) =>  getPasswordValidRule(value),
            (value) => getValidRule(validator.equals(value , registerState.RepeatPassword.textValue) , 'Пароли должны совпадать')
        ],
        RepeatPassword: [
            (value) => getPasswordValidRule(value),
            (value) => getValidRule(validator.equals(value , registerState.Password.textValue) , 'Пароли должны совпадать')
        ]
    }

    const { initialValdi , getFormValid} = new ValidatorForm(validationRules);


    const validUniqueEmail = (value) => {

        dispatch(checkUniqueEmail.action_request(value));
    }

    const setValueFiledState = ( value, name ) => {

        setRegisterState(prevState => ({
            ...prevState, 
            [name]: { 
                ...prevState[name], 
                textValue: value,
                isChanegd: true
            }
        }));
    }
 
    const onChangeInputHandler = (e) => { 

        const {value , name} = e.target;

        setValueFiledState(value , name);

        if(name === 'Email') { validUniqueEmail(value) }
            
    }

    const onVisibleHandler = (name , isVisible) => {

        setRegisterState(prevState => ({
            ...prevState, 
            [name]: { 
                ...prevState[name], 
                isVisible: isVisible
            }
        }));
    }

    const onClickSubmitForm = (e) => {

        e.preventDefault();
        setAsChanged(registerState , setRegisterState);

        if(getFormValid()) {
            
        }
    }

    const getProperties = ({name , classes = null}) => {
        
        return {
            name:name,
            className: styles['group-inputs'],
            classes:classes ?? {root: styles['input-filed-root']},
            disabled:loadingLoginingData, 
            filedData: { ...registerState[name] }, 
            initialValdi, 
            onChange:onChangeInputHandler
        }
    }

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off" onSubmit={onClickSubmitForm}>

                <h2 className={styles['title']}>Регистрация</h2>

                <ValidatedTextField 
                    label = "Email"
                    {...getProperties({name: "Email"})}/>

                <ValidatedTextField 
                    label = "Логин"
                    {...getProperties({name: "Login"})}/>

                <ValidatedPasswordTextFiled 
                    label = "Пароль"
                    onVisible={onVisibleHandler}
                    {...getProperties({name: "Password"})}/>


                <ValidatedPasswordTextFiled 
                    label = "Повторите пароль"
                    onVisible={onVisibleHandler}
                    {...getProperties({name: "RepeatPassword"})}/>


                <div className={styles['group-button']}>
                    <Button 
                        disabled={[loadingLoginingData , loadingCheckingEmail].some(loading => loading)}
                        color="primary"
                        type="submit"
                        variant="contained"
                        className={styles['sender-btn']}>Регистрация</Button>
                </div>
            </form>
        </div>
    )
}