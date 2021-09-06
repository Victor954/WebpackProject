import React from 'react';
import { AppBar, Toolbar ,List , ListItem } from '@material-ui/core';
import { Link  } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';

import { loadProductTypesTree } from '../../../services/productTypeService/store/ProductTypeActionsCreator';
import { ShowStateModelEnum } from '../../../helpers/models/ShowModeEnum';
import { productTypeService } from '../../../helpers/GetState';
import UserSector from './userSector/UserSectorComponent';

import styles from './MenuMainComponent.module.scss';


function MenuTreeTypesComponent({ data , interaction = 0}) {

    const getRefCode = (refId , collection = data) => {

        for(const {$id , code , children} in collection ) { 

            if(refId === $id) {
                return code;
            }

            getRefCode(refId , children);
        }

        return '';
    }

    const getPath = (nodeTree, codes = []) => {

        if(nodeTree.parent) {
            console.log(getRefCode(nodeTree.parent.$ref));
        }

        return `product/${codes.reverse().join('/')}`;
    }

    if(!data) {
        return null;
    }

    return(
        <List className={interaction > 0 ? '' : styles['menu-products-list']}>
            {
                data.map(({name , code , children , parent}) => {
                    return (
                        <ListItem className={styles['menu-list-item']} key={code}>
                            <Link to={getPath({code , parent})}>{name}</Link>        
                            { children.length > 0 ? MenuTreeTypesComponent({data: children , interaction: interaction + 1}) : null }
                        </ListItem>
                    );
                })
            }
        </List>
    );
}

export default function MenuMainComponent({ contracts }) {

    const dispatch = useDispatch();
    const { data } = useSelector(state => productTypeService(state).productTypeTreeData);
    const treeData = [];

    React.useEffect(() => {

        loadMenuProductTypesTree();
    }, [dispatch]);

    React.useEffect(() => {

        data.forEach(node => {
            
        });

    }, [data]);

    function loop(parent , child) {

        if(parent !== null) {
            
        }
    }

    function loadMenuProductTypesTree() {

        dispatch(loadProductTypesTree.action_request());
    }

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
            <AppBar position="fixed" color="default">
                <Toolbar className={styles['app-toolbar']}>

                    <List className={styles['menu-list']}>
                        {  getMenuItems() }
                    </List>

                    <UserSector />
                </Toolbar>
            </AppBar>
        </div>
    )
}