import React from 'react';
import { useSelector , useDispatch} from 'react-redux';

import { action_visible_user_menu_module } from '../../store/MenuActionsCreator';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import { 
    MenuItem, 
    Popper, 
    Paper, 
    ClickAwayListener, 
    MenuList, 
    ListItemIcon, 
    ListItemText
} from '@material-ui/core';

export default function UserMenuComponent ({ anchorEl }) {

    const [arrowRef, setArrowRef] = React.useState(null);
    const isMenuUserVisible = useSelector((state) => state.headerPageData.menuModule.menuData.menuUserVisible);
    const dispatch = useDispatch();


    const handleClose = (event) => {

        if (anchorEl && anchorEl.contains(event.target)) {
          return;
        }
        
        setApplaySelectMenu(false);
    };

    const setApplaySelectMenu = (isMenuUserVisible) => {

        dispatch(action_visible_user_menu_module(isMenuUserVisible))
    }

    const getMenuItem = (IconComponent , label) => {

        return (
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <IconComponent fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={label} />
            </MenuItem>
        )
    }

    return (

        <Popper 
            open={isMenuUserVisible} 
            anchorEl={anchorEl} 
            transition
            disablePortal={true}
            placement="bottom-end"
            modifiers={{
                arrow:{
                    enabled: true,
                    element: arrowRef
                }
            }}>
            
            <span className="arrow" ref={setArrowRef}></span>
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={isMenuUserVisible}>
                            { getMenuItem(ShoppingCartOutlinedIcon , 'Корзина') }
                            { getMenuItem(PersonOutlineOutlinedIcon , 'Аккаунт') }
                            { getMenuItem(ExitToAppOutlinedIcon , 'Выйти') }
                    </MenuList>
                </ClickAwayListener>
            </Paper>
        </Popper>
    );
}