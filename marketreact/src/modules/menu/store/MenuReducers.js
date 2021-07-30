import { VISIBLE_USER_MENU_MODULE } from './MenuActions';
import { combineReducers } from 'redux';
import { menuStore } from './MenuInitialStore';

function menuReducer (state = menuStore, action){

    switch(action.type){
        case VISIBLE_USER_MENU_MODULE:
            return { ...state , menuUserVisible: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    menuData: menuReducer
});