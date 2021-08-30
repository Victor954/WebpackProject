import React from 'react';
import Card from './productCard/ProductCardComponent';
import { useDispatch , useSelector } from 'react-redux'
import { productSerivce , productModule} from '../../../helpers/GetState';
import { loadProducts } from '../../../services/productService/store/ProductActionsCreator';
import { action_set_filter_product_module } from '../store/ProductsActionsCreator';

import { CircularProgress } from '@material-ui/core';
import { ErrorServerComponent } from '../../../helpers/components/error/ErrorServerComponet';
import ProductsTitleFilterComponent from '../components/productFilter/ProductsTitleFilterComponent';
import ProductsPaginationComponent from './productPagination/ProductsPaginationComponent';

export default function MainProductComponent(props) {

    const dispatch = useDispatch();


    const { loading , data , errorLoading } = useSelector(state => productSerivce(state).productsData);
    const filterData = useSelector(state => productModule(state).filterData)

    const { data: products , page , pageCount } = data;


    React.useEffect(() => {

        applyFilter();
    }, [dispatch , filterData]);


    const onChangedFilterHandler = (name , value) => {

        dispatch(action_set_filter_product_module({name , value}));
    }

    const onChangePaginationHandler = (value) => {

        applyFilter(value);
    }


    function applyFilter (page = 1) { 

        dispatch(loadProducts.action_request({filter: filterData , page: page}));
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

                <ProductsTitleFilterComponent 
                    onChangedFilterTitle={onChangedFilterHandler} />

                <div className="row">
                { 
                    products.map(postData => <Card key={postData.id} { ...postData } />) 
                }
                </div>

                <ProductsPaginationComponent 
                    onChangePagination={onChangePaginationHandler}
                    page={page}
                    pageCount={pageCount} />
            </div>
        </ErrorServerComponent>
    )
} 
