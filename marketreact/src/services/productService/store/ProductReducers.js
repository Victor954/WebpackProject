import { combineReducers } from 'redux';

import * as Actions from './PropductActions';
import * as State from './ProductInitialState';

const propductsLoadReducer = (state = State.loadProductState, action) => {

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

export default combineReducers({
    productsData: propductsLoadReducer
});