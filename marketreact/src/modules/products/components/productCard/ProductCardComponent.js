import React from 'react';

import {
    Card, 
    CardHeader, 
    CardContent, 
    Typography
} from '@material-ui/core';

import ProductCardImageComponent from './productCardImage/ProductCardImageComponent';
import styles from './ProductCardComponent.module.scss';

export default function ProductCardComponent ({ title , discription , photo , date }) {

    return (
        <div className="col-4">
        <Card className={styles['card-product']}>
            <CardHeader title={title}/>
            <CardContent>

                <ProductCardImageComponent data={photo} styles={styles} />

                <Typography 
                    className={styles['discription-card-product']} 
                    variant="body2" 
                    color="textSecondary" 
                    component="p">
                    {discription}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}