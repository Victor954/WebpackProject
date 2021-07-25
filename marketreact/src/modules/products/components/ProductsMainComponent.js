import React from 'react';
import Card from './productCard/ProductCardComponent';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import { loadProducts } from './../../../services/productService/store/ProductActionsCreator';

function MainProductComponent(props) {

    const onLoadData = (e) => {

        props.onLoadProductRequest();
    }

    if(props.loading){

        return (
            <div>loading...</div>
        )
    }

    return (
        <div>

            <button onClick={onLoadData}>on load data</button>
            {props.products.map(postData => <Card key={postData.id} {...postData}/>)}
        </div>
    )
}

function mapStateToProps ({ modulesData }) {

    const { productServiceModel } = modulesData;

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
