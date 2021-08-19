import { combineReducers } from 'redux';

import * as Actions from './ProductsActions';
import * as State from './PropductsInitialStore';

function filterProductsReducer (state = State.productsFilterState , action){

    switch(action.type){
        default:
            return state;
    }
}

export default combineReducers({
    filterData: filterProductsReducer
});