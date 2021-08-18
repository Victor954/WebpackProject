import React from 'react';
import Card from './productCard/ProductCardComponent';

import { Pagination } from '@material-ui/lab';

export default function MainProductComponent(props) {

    const [page , setPage] = React.useState(1);

    const getPost = (index) => ({
        id: index, 
        title: `Test ${index}`,
        discription: `Test discription ${index}`,
        photo: '/productsModule/images/image.jpg',
        date: new Date(1995 + index, 11, 17)
    });

    const data = {
        posts: [...Array(100).keys()].map(index => getPost(index)),
        pagination: {
            page: 1,
            count: 100,
            countAt: 20,
            countPages() { 
                Math.ceil(this.count / this.countAt)
            }
        },
        filter: {
            name: '',
            minPrice: 0,
            maxPrice: 1000
        }
    }


    const onChangePaginationHandler = (event , value) => {

        setPage(value);
    }

    return (
        <div className="container">

            <div className="row">
                { 
                    data.posts.map(postData => <Card key={postData.id} { ...postData } />) 
                }
            </div>

            <div className="row">
                <div className="col-12">
                    <Pagination count={data.pagination.countPages()} page={page} onChange={onChangePaginationHandler} />
                </div>
            </div>

        </div>
    )
} 
