import React from 'react';
import { CardMedia } from '@material-ui/core';

export default function ProductCardImageComponent ({ data , styles }) {

    const [isNotExistImage, setIsLoadedImage] = React.useState(true)

    const getIsLoaedImage = () => {

        return [
            data === null,
            data === undefined,
            typeof data !== 'string'
        ].some(is => is);
    }

    React.useEffect(() => {
        
        setIsLoadedImage(getIsLoaedImage());
    }, [])


    const getTitle = (isNotExistImage) => {
        
        if(isNotExistImage) {
            return 'Нет изображения'
        }

        return 'Категория фото';
    }

    const getScrImage = (isNotExistImage) => {

        if(isNotExistImage) {
            return `${process.env.PUBLIC_URL}/productsModule/images/image.jpg`
        }

        return data;
    }

    return (
        <CardMedia 
        classes={{ root: styles['image-card-product']} }
        image={getScrImage(isNotExistImage)}
        title={getTitle(isNotExistImage)}
        />
    )
}