import { AppBar, Toolbar ,List , ListItem } from '@material-ui/core';
import { StylesProvider } from "@material-ui/core/styles";
import { Link  } from "react-router-dom";

import ShowModeEnum from '../../../helpers/models/ShowModeEnum';
import UserMenuComponent from './userMenu/UserMenuComponent';

import './MenuMainComponent.scss';

export default function MenuMainComponent({ contracts }) {

    const getMenuItems = () => {
        
        return contracts.map((contract) => {

            if (contract.showMode !== ShowModeEnum.neverShow) {
                return (
                    <ListItem  className="menu-list-item" key={contract.menuLink}>
                        <Link to={contract.menuLink} >{contract.menuItemName}</Link>
                    </ListItem>
                )
            }

            return null;
        });
    }

    return (
        <div>
            <StylesProvider injectFirst>
            <AppBar position="static" color="default">
                <Toolbar>
                    
                    <List className="menu-list">
                        {  getMenuItems() }
                    </List>
                    
                    <UserMenuComponent />
                </Toolbar>
            </AppBar>
            </StylesProvider>
        </div>
    )
}