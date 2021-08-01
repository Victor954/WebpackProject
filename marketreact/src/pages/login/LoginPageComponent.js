import React from "react";
import Injection from "./index";
import styles from './LoginPageComponent.module.scss';

export default function LoginPage(props) {

    const MainLoginComponent = Injection.getComponentByCode('loginModule');
    const MainRegisterComponent = Injection.getComponentByCode('registerModule');

    const getClass = (...names) => names.map(name => styles[name]).join(' ');
    
    return (
        <div className='container'>
            <div className='row'>
                <div className={`col-6 ${getClass('col-6')}`} >
                    <div className={getClass('col-flex' ,'right')}>
                        <div className={getClass('col-auth')}>
                            <MainLoginComponent />
                        </div>
                    </div>
                </div>

                <div className={`col-1 ${getClass('col-1')}`}>
                    <span className={getClass('borderline')}></span>
                </div>

                <div className={`col-6 ${getClass('col-6')}`}>
                    <div className={getClass('col-flex' , 'left')}>
                        <div className={getClass('col-auth')}>
                            <MainRegisterComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}