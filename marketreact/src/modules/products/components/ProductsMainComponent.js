import React from 'react';
import Card from './productCard/ProductCardComponent';
import { useDispatch , useSelector } from 'react-redux'
import { productSerivce , productModule} from '../../../helpers/GetState';
import { loadProducts } from '../../../services/productService/store/ProductActionsCreator';

import { Pagination } from '@material-ui/lab';
import { CircularProgress } from '@material-ui/core';
import { ErrorServerComponent } from '../../../helpers/components/error/ErrorServerComponet';
import ProductsTitleFilterComponent from '../components/productFilter/ProductsTitleFilterComponent';

export default function MainProductComponent(props) {

    const dispatch = useDispatch();


    const { loading , data , errorLoading } = useSelector(state => productSerivce(state).productsData);
    const filterData = useSelector(state => productModule(state).filterData)

    const { data: products , page , pageCount } = data;


    React.useEffect(() => {

        console.log({
            data,
            filterData
        });

        dispatch(loadProducts.action_request({filter: filterData , page: page}));

    }, [dispatch]);


    const onChangePaginationHandler = (event , value) => {

        dispatch(loadProducts.action_request({filter: filterData , page: value}));
    }

    if(loading) {

        return (
            <div className="container">

                <CircularProgress />
            </div>
        )
    }

    return (
        <ErrorServerComponent data={errorLoading}>
            <div className="container">


                <ProductsTitleFilterComponent />


                <div className="row">
                { 
                    products.map(postData => <Card key={postData.id} { ...postData } />) 
                }
                </div>

                <div className="row">
                    <div className="col-12">
                        <Pagination count={pageCount} page={page} onChange={onChangePaginationHandler} />
                    </div>
                </div>

            </div>
        </ErrorServerComponent>
    )
} 
