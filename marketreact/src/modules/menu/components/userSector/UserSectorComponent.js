import React from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { action_visible_user_menu_module } from '../../store/MenuActionsCreator';

import { 
    Button, 
    Avatar, 
    Typography
} from '@material-ui/core';

import UserMenu from '../userMenu/UserMenuComponent';

import './UserSectorComponent.scss';

export default function USerSectorComponent (props) {

    const classAvatarActive = 'user-avatar-select-color';
    const classAvatar = 'user-avatar-color';

    const anchorRef = React.useRef(null);

    const isMenuUserVisible = useSelector((state) => state.headerData.menuModule.menuData.menuUserVisible);
    const userData = useSelector((state) => state.mainData.authServiceModel.authUserData.data);

    const dispatch = useDispatch();

    const onClickAvatarHandler = (event) => {

        dispatch(action_visible_user_menu_module(!isMenuUserVisible))
    }

    const getClassName = () => {

        return (isMenuUserVisible) ? classAvatarActive : classAvatar;
    }

    if(userData.token){

        return (
            <div className="user-box">
                <Typography className="email">{ userData.email }</Typography>
                <Avatar onClick={onClickAvatarHandler}  ref={anchorRef} classes={{colorDefault: getClassName()}}>U</Avatar>

                <UserMenu anchorEl={anchorRef.current}/>
            </div>
        )
    } else {

        return (
            <Button classes={{root: 'login-button' , label:'login-button-label'}}>Войти</Button>
        )
    }

}