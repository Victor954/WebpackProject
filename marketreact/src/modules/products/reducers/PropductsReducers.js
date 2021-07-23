import { SET_POSTS_DATA } from '../actions/ProductsActions';
import { combineReducers } from 'redux';
import { productsStore } from '../initialStore/PropductsInitialStore';

function propductsReducer (state = productsStore, action){

    switch(action.type){
        case SET_POSTS_DATA:
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({
    propducts: propductsReducer
});