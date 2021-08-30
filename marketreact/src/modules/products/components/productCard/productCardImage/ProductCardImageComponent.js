import React from 'react';
import { CardMedia } from '@material-ui/core';

export default function ProductCardImageComponent ({ data , styles }) {

    const getScrImage = () => {

        const isNotLoaded = [
            data === null,
            data === undefined,
            typeof data !== 'string'
        ].some(is => is);

        if(isNotLoaded) {
            return '/public/productsModule/images/image.jpg'
        }

        return data;
    }

    return (
        <CardMedia 
        classes={{ root: styles['image-card-product']} }
        image={getScrImage()}
        title="Paella dish"
        />
    )
}