import React from 'react';
import { useSelector } from 'react-redux';
import {  Button } from '@material-ui/core';
import validator from 'validator';

import { ValidatorForm , getValidRule, getLoginValidRule , getPasswordValidRule } from '../../helper/ValidatorForm';
import { setAsChanged } from '../../helper/ValidatorFormDom';
import ValidatedPasswordTextFiled from '../../components/ValidatedPasswordTextFiled';
import ValidatedTextField from '../../components/ValidatedTextField';

import styles from './RegisterMainComponent.module.scss';

export default function RegisterMainComponent(props) {


    const loadingLoginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.loading);


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
            (value) => getValidRule(validator.isEmail(value) , 'Введите Email')
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


    const onChangeInputHandler = (e) => { 

        const {value , name} = e.target;

        setRegisterState(prevState => ({
            ...prevState, 
            [name]: { 
                ...prevState[name], 
                textValue: value,
                isChanegd: true
            }
        }));

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

    const getProperties = (name) => {
        
        return {
            name:name,
            className: styles['group-inputs'],
            classes:{root: styles['input-filed-root']},
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
                    {...getProperties("Email")}/>

                <ValidatedTextField 
                    label = "Логин"
                    {...getProperties("Login")}/>

                <ValidatedPasswordTextFiled 
                    label = "Пароль"
                    onVisible={onVisibleHandler}
                    {...getProperties("Password")}/>


                <ValidatedPasswordTextFiled 
                    label = "Повторите пароль"
                    onVisible={onVisibleHandler}
                    {...getProperties("RepeatPassword")}/>


                <div className={styles['group-button']}>
                    <Button 
                        disabled={loadingLoginingData}
                        color="primary"
                        type="submit"
                        variant="contained"
                        className={styles['sender-btn']}>Регистрация</Button>
                </div>
            </form>
        </div>
    )
}