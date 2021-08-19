import React from 'react';
import Card from './productCard/ProductCardComponent';
import { useDispatch , useSelector } from 'react-redux'
import { productSerivce , productModule} from '../../../helpers/GetState';
import { fetch_products_request_action } from '../../../services/productService/store/ProductActionsCreator';

import { Pagination } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';

export default function MainProductComponent(props) {

    const dispatch = useDispatch();

    const postData = useSelector(state => productSerivce(state).productsData);
    const paginationData = useSelector(state => productSerivce(state).paginationData);
    const filterData = useSelector(state => productModule(state).filterData)

    const [page , setPage] = React.useState(1);

    React.useEffect(() => {

        console.log({
            postData,
            paginationData,
            filterData
        });

        dispatch(fetch_products_request_action({filter: filterData , page: page}));

    }, [dispatch]);


    const onChangePaginationHandler = (event , value) => {

        setPage(value);
    }

    if(postData.loading) {

        return (
            <div className="container">

                <CircularProgress />
            </div>
        )
    }

    return (
        <div className="container">

            <div className="row">
                { 
                    postData.data.map(postData => <Card key={postData.id} { ...postData } />) 
                }
            </div>

            <div className="row">
                <div className="col-12">
                    <Pagination count={paginationData.countPage} page={page} onChange={onChangePaginationHandler} />
                </div>
            </div>

        </div>
    )
} 
