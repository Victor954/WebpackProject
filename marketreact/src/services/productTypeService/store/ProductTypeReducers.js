import { combineReducers } from 'redux';

import * as Actions from './PropductTypeActions';
import * as State from './ProductTypeInitialState';

const propductsTypesTreeReducer = (state = State.loadProductState, action) => {

    switch(action.type){
        case Actions.FETCH_LOAD_PRODUCT_TYPES_TREE_SUCCEEDED:
            return { ...state , data: action.payload };
        case Actions.LOADING_LOAD_PRODUCT_TYPES_TREE:
            return { ...state , loading: action.payload };
        case Actions.FETCH_LOAD_PRODUCT_TYPES_TREE_FAILED:
            return  { ...state , errorLoading: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    productTypeTreeData: propductsTypesTreeReducer
});