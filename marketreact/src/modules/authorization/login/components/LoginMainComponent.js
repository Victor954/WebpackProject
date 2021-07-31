import React from 'react';
import { TextField  , Button} from '@material-ui/core';
import validator from 'validator';

import styles from './LoginMainComponent.module.scss';

export default function LoginMainComponent(props) {

    const [loginState , setLoginState] = React.useState({
        loginEmail: '',
        password: '',
        errors: { loginEmail: '' ,  password: '' }
    });

    const validationRules = {
        loginEmail: [

            (value) => ({ 
                isValidate: !validator.isEmpty(value), 
                textError: 'Поле должно быть заполнено'
            }), 
            (value) => ({ 
                isValidate:validator.isEmail(value), 
                textError: 'Это не Email'
            })
        ],
        password: [

            (value) => ({
                isValidate: !validator.isEmpty(value), 
                textError: 'Поле должно быть заполнено'
            })
        ]
    }

    const onChangeInputData = (e , argsValidation) => {

        const { name, value } = e.target;
        setLoginState(prevState => ({...prevState , [name]: value }));

        validation( argsValidation.map(valid => valid(value)) , name )
    }  


    const validation = (validators , name) => {

        for(const {isValidate , textError } of validators) { 
            
            if(!isValidate){
                setError(name , textError);
                break;
            }

            setError(name , '');
        }
    }

    const setError = (name , textError) => {

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

    return (
        <div className="col-12">

            <form className={styles['form-box']} noValidate autoComplete="off">

                <h2 className={styles['title']}>Войти</h2>

                <div className={styles['group-inputs']}>
                    <TextField 
                        size="small" 
                        variant="outlined" 
                        classes={{root: styles['input-filed-root']}}
                        onChange={e => onChangeInputData(e , validationRules.loginEmail)} 
                        value={loginState.loginEmail}
                        label="Логин или Email" 
                        name="loginEmail"
                        helperText={loginState.errors.loginEmail}
                        error={loginState.errors.loginEmail.length > 0}>
                    </TextField>
                </div>
                <div className={styles['group-inputs']}>
                    <TextField 
                        size="small" 
                        variant="outlined" 
                        classes={{root: styles['input-filed-root']}} 
                        onChange={e => onChangeInputData(e , validationRules.password)} 
                        value={loginState.password}
                        label="Пароль" 
                        name="password" 
                        helperText={loginState.errors.password}
                        error={loginState.errors.password.length > 0}>
                    </TextField>
                </div>
                <div className={styles['group-button']}>
                    <Button 
                        color="primary" 
                        variant="contained" 
                        className={styles['sender-btn']}>Войти</Button>
                </div>
            </form>
        </div>
    )
}