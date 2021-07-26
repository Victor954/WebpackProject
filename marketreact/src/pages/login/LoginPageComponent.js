import React from "react";
import Injection from "./index";
import { useLocation , useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { loginIn } from '../../services/authService/store/AuthActionsCreator';

export default function LoginPage(props) {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch()

    const loginInClickHandler = (e) => {
        history.replace(from);
        dispatch(loginIn.action_succeeded({token: '23232' , login: 'asas' , email:''}));
    }

    return (
        <div>
            <button onClick={loginInClickHandler}>Login</button>
        </div>
    )
}