import React from 'react';
import Card from './components/productCard/ProductCardComponent';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import { action_set_posts_data } from './actionsCreator/ProductsActionsCreator';

function MainProductComponent(props) {

    const onLoadData = (e) => {

        props.onSetPost([
            {
                id: 0,
                title: 'Title',
                discription: 'Discription'
            }
        ]);
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
        onSetPost: bindActionCreators(action_set_posts_data, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProductComponent);