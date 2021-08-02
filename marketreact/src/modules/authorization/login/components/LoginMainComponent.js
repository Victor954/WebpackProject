import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { TextField  , Button} from '@material-ui/core';
import { useLocation , useHistory } from 'react-router-dom';
import validator from 'validator';
import { ValidatorForm } from '../../helper/ValidatorForm';

import { logining , action_backup_loading } from '../../../../services/authorizationService/store/AuthActionsCreator';

import styles from './LoginMainComponent.module.scss';

const getValidRule = (validatorRule , textError) => {

    return { 
        isValidate: validatorRule, 
        textError: textError
    };
}


function useForceUpdate(){
    const [value, setValue] = React.useState(0);
    return () => setValue(value => value + 1);
}

function textFieldValidate (WrappedComponent) {

    return class extends React.Component {
        
        constructor(props) {
            super(props);
        }

        getPropsTextField = () => {

            const { name , label , value , onChangeInput, validate , disable}  = this.props;
    
            return {
                size:'small',
                variant:'outlined',
                classes:{root: styles['input-filed-root']},
                disabled: disable,
                onChange: onChangeInput,
                value:value,
                label:label,
                name:name,
                helperText:(validate.isChanged) ? validate.textError : '',
                error:!validate.isValid && validate.isChanged
            }
        }

        render () {
            return <WrappedComponent  { ...this.getPropsTextField() } />;
        }
    }
}

const TextFieldValidate = textFieldValidate(TextField);

export default function LoginMainComponent(props) {

    const dispatch = useDispatch()

    const history = useHistory();
    const location = useLocation();
    
    const userData = useSelector((state) => state.mainData.userServiceModel.userData.data);
    const loginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.data);
    const loadingLoginingData = useSelector((state) => state.loginPageData.authorizationServiceModel.loginingData.loading);
    const forceUpdate = useForceUpdate();

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

    const validatorForm =  new ValidatorForm({

        loginEmail: [
    
            (value) => getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(validator.isEmail(value) , 'Это не Email'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ],
        password: [
    
            (value) =>  getValidRule(!validator.isEmpty(value) , 'Поле должно быть заполнено'),
            (value) => getValidRule(!loginingData.form.isException , loginingData.form.msg )
        ]
    });

    const [loginState , setLoginState] = React.useState({
        loginEmail:'',
        password:''
    });

    const onChangeInputHandler = (e) => {

        const { name, value } = e.target;

        validatorForm.setChanged(true, name);
        
        setLoginState(prevState => ({...prevState , [name]: value.replace(/\s/g,'') }));

        if(loginingData.form.isException){
            dispatch(action_backup_loading());
        }
    }  

    const onSubmitFormHandler = (e) => {

        if(validatorForm.getIsValidate()){
            dispatch(logining.action_request(getLoginData()));
        } else {
            forceUpdate();
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

    const getFields = (textFielsData) => {

        return textFielsData.map(fieldData => {

            const name = fieldData.name;
            const value = loginState[name];

            return (<div className={styles['group-inputs']} key={fieldData.name}>
                <TextFieldValidate 
                    name={name} 
                    label={fieldData.label} 
                    disable={loadingLoginingData} 
                    value={value} 
                    validate={validatorForm.getValid(value, name)}
                    onChangeInput={onChangeInputHandler} 
                >
                </TextFieldValidate>
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