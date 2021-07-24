import { combineReducers } from 'redux';

import * as Actions from './PropductActions';
import * as Store from './ProductInitialStore';

const propductsLoadReducer = (state = Store.loadProductsStore, action) => {

    switch(action.type){
        case Actions.FETCH_LOAD_PRODUCTS_SUCCEEDED:
            return { ...state , data: action.payload };
        case Actions.LOADING_LOAD_PRODUCTS:
            return { ...state , loading: action.payload };
        case Actions.FETCH_LOAD_PRODUCTS_FAILED:
            return  { ...state , errorLoading: action.payload };
        default:
            return state;
    }
}

const propductsAddReducer = (state = Store.addProductStore, action) => {

    switch(action.type){
        case Actions.FETCH_ADD_PRODUCT_SUCCEEDED:
            return action.payload;
        case Actions.FETCH_ADD_PRODUCT_FAILED:
            return  { ...state , errorLoading: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    loadedProduts: propductsLoadReducer,
    addedProduct: propductsAddReducer
});