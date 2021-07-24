import { TEST_PRODUCTS_MODULE } from './ProductsActions';
import { combineReducers } from 'redux';
import { productsStore } from './PropductsInitialStore';

function propductsReducer (state = productsStore, action){

    switch(action.type){
        case TEST_PRODUCTS_MODULE:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    localModuleStore: propductsReducer
});