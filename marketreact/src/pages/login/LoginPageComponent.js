import React from "react";
import Injection from "./index";
import styles from './LoginPageComponent.module.scss';
//import { useLocation , useHistory } from 'react-router-dom';
//import { useDispatch } from 'react-redux'

//import { loginIn } from '../../services/authService/store/AuthActionsCreator';

export default function LoginPage(props) {

    const MainLoginComponent = Injection.getComponentByCode('loginModule');
    const MainRegisterComponent = Injection.getComponentByCode('registerModule');

    /*let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch()

    const loginInClickHandler = (e) => {
        history.replace(from);
        dispatch(loginIn.action_succeeded({token: '23232' , login: 'asas' , email:''}));
    }*/

    const getClass = (name) => `${styles['col-auth']} ${styles[name]} `;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className={getClass('right')}>
                        <MainLoginComponent />
                    </div>
                </div>
                <div className='col-6'>
                    <div className={getClass('left')}>
                        <MainRegisterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}