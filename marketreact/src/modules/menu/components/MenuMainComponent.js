import React from 'react';
import { AppBar, Toolbar ,List , ListItem } from '@material-ui/core';
import { Link  } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';

import { loadProductTypesTree } from '../../../services/productTypeService/store/ProductTypeActionsCreator';
import { ShowStateModelEnum } from '../../../helpers/models/ShowModeEnum';
import { productTypeService } from '../../../helpers/GetState';
import UserSector from './userSector/UserSectorComponent';
import MenuTreeTypesComponent from '../components/menuProducts/MenuProductsComponent';

import styles from './MenuMainComponent.module.scss';

export default function MenuMainComponent({ contracts }) {

    const dispatch = useDispatch();
    const { data } = useSelector(state => productTypeService(state).productTypeTreeData);

    const [treeData, setTreeData] = React.useState([]);

    React.useEffect(() => {

        const array = setParentsTree(null ,[...data]);

        setTreeData(array);

    }, [data]);

    React.useEffect(() => {

        loadMenuProductTypesTree();
    }, [dispatch]);

    function loadMenuProductTypesTree() {

        dispatch(loadProductTypesTree.action_request());
    }

    function setParentsTree(parent = null, data = treeData) {

        for(const node of data) {

            node.parent =  (parent) ? {...parent , children: null } : null;
            setParentsTree(node , node.children)
        }

        return data;
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

                    <MenuTreeTypesComponent data={treeData}/> 
 
                    <UserSector />
                </Toolbar>
            </AppBar>
        </div>
    )
}