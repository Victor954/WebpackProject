import React from 'react';
import Card from './productCard/ProductCardComponent';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import { loadProducts } from './../../../services/productService/store/ProductActionsCreator';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

function MainProductComponent(props) {

    const onLoadData = (e) => {

        props.onLoadProductRequest();
    }

    if(props.loading){

        return (
            <CircularProgress />
        )
    }

    return (
        <div className="container">

            <Button variant="contained" color="primary" onClick={onLoadData}>on load data</Button>
            
            <div className="row">
                {props.products.map(postData => <Card key={postData.id} {...postData}/>)}
            </div>
        </div>
    )
}

function mapStateToProps ({pageData}) {

    const { productServiceModel } = pageData;

    return {
        products: productServiceModel.loadedProduts.data,
        loading:  productServiceModel.loadedProduts.loading
      };
}

function mapDispatchToProps (dispatch) {

    return {
        onLoadProductRequest: bindActionCreators(loadProducts.action_request, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProductComponent);
