import { combineReducers } from 'redux';

import * as Actions from './ProductsActions';
import * as State from './PropductsInitialStore';

function filterProductsReducer (state = State.productsFilterState , action){

    switch(action.type){
        case Actions.SET_FILTER_PRODUCTS_MODULE:
            const {value , name } = action.payload;
            return { ...state , [name]: value  }
        default:
            return state;
    }
}

export default combineReducers({
    filterData: filterProductsReducer
});