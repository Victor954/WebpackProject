import React from 'react';

import {
    Card, 
    CardHeader, 
    CardContent, 
    Typography,
    CardMedia
} from '@material-ui/core';

import styles from './ProductCardComponent.module.scss';

export default function ProductCardComponent ({ title , discription , photo , date }) {

    return (
        <div className="col-4">
        <Card className={styles['card-product']}>
            <CardHeader title={title}/>
            <CardContent>

                <CardMedia 
                    classes={{ root: styles['image-card-product']} }
                    image={photo}
                    title="Paella dish"
                />

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