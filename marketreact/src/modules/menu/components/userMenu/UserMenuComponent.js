import React from 'react';

import { Button , Avatar , Typography , Menu , MenuItem} from '@material-ui/core';
import './UserMenuComponent.scss';

export default function UserMenuComponent (props) {


    const [anchorEl , setAnchorEl] = React.useState(null); 

    const user = {
        login: 'Login',
        email: 'email@email.com'
    };

    const onClickAvatarHandler = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    if(user){

        return (
            <div className="user-box">
                <Typography className="email">{ user.email }</Typography>
                <Avatar onClick={onClickAvatarHandler} classes={{colorDefault: 'user-avatar-color'}}>U</Avatar>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        )
    } else {

        return (
            <Button classes={{root: 'login-button' , label:'login-button-label'}}>Войти</Button>
        )
    }

}