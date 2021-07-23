import { PRODUCTS_FETCH_SUCCEEDED , PRODUCTS_FETCH_FAILED } from './../actions/ProductsActions';
import { combineReducers } from 'redux';
import { productsStore } from '../initialStore/PropductsInitialStore';

function propductsReducer (state = productsStore, action){

    switch(action.type){
        case PRODUCTS_FETCH_SUCCEEDED:
            return action.value;
        case PRODUCTS_FETCH_FAILED:
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({
    propducts: propductsReducer
});