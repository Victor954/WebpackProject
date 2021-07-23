import React from 'react';
import Card from './productCard/ProductCardComponent';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import { action_products_fetch_request } from '../store/actionsCreator/ProductsActionsCreator';

function MainProductComponent(props) {

    const onLoadData = (e) => {

        props.onProductsFetchRequest();
    }

    return (
        <div>
            <button onClick={onLoadData}>on load data</button>
            {props.products.map(postData => <Card key={postData.id} {...postData}/>)}
        </div>
    )
}

function mapStateToProps (state) {

    return {
        products: state.productsModule.propducts
      };
}

function mapDispatchToProps (dispatch) {

    return {
        onProductsFetchRequest: bindActionCreators(action_products_fetch_request, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProductComponent);
