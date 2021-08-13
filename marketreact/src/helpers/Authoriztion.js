import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { userSerivce } from './GetState';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getUser } from '../services/userService/store/UserActionsCreator';

export function Authorization ({ children }) {

    const user = useSelector(state => userSerivce(state).userData.data)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUser.action_request());
    });

    if(user.token) {
        return children;
    }

    return <CircularProgress />;
}