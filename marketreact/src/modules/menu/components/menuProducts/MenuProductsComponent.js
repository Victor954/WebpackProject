import React from 'react'
import styles from './MenuProductsComponent.module.scss';

import { List , ListItem } from '@material-ui/core';
import { Link  } from "react-router-dom";

export default function MenuTreeTypesComponent({ data , interaction = 0}) {

    const getPath = (node , nodes = []) => {

        if(node !== null) {
            return getPath(node.parent , [...nodes , node.code]);
        }

        return `/products/${nodes.reverse().join('/')}`;
    }

    return(
        <List className={interaction > 0 ? '' : styles['menu-products-list']}>
            {
                data.map((node) => {
                    return (
                        <ListItem className={styles['menu-list-item']} key={node.code}>
                            <Link to={getPath(node)}>{node.name}</Link>        
                            { node.children.length > 0 ? MenuTreeTypesComponent({data: node.children ,interaction: interaction + 1}) : null }
                        </ListItem>
                    );
                })
            }
        </List>
    );
}