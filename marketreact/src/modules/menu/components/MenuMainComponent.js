import React from 'react';
import { AppBar, Toolbar ,List , ListItem } from '@material-ui/core';
import { Link  } from "react-router-dom";

import { ShowStateModelEnum } from '../../../helpers/models/ShowModeEnum';
import UserSector from './userSector/UserSectorComponent';

import styles from './MenuMainComponent.module.scss';

export default function MenuMainComponent({ contracts }) {

    const getMenuItems = () => {
        
        return contracts.map((contract) => {

            if (contract.showMode !== ShowStateModelEnum.neverShow) {
                return (
                    <ListItem  className={styles['menu-list-item']} key={contract.menuLink}>
                        <Link to={contract.menuLink} >{contract.menuItemName}</Link>
                    </ListItem>
                )
            }

            return null;
        });
    }

    return (
        <div>     
            <AppBar position="static" color="default">
                <Toolbar>
                    
                    <List className={styles['menu-list']}>
                        {  getMenuItems() }
                    </List>
                    
                    <UserSector />
                </Toolbar>
            </AppBar>
        </div>
    )
}