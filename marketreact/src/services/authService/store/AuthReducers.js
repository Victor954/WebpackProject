import { combineReducers } from 'redux';

import * as Actions from './AuthActions';
import * as State from './AuthInitialState';

const authorizationReducer = (state = State.authUserDataStore, action) => {

    switch(action.type) {
        
        case Actions.FETCH_LOGIN_IN_SUCCEEDED:
            return { ...state , data: action.payload };
        case Actions.FETCH_LOGIN_IN_FAILED:
            return { ...state , errrorLoading: action.payload };
        case Actions.LOADING_LOGIN_IN:
            return  { ...state , loading: action.payload };
        case Actions.FETCH_LOGIN_OUT_SUCCEEDED:
            return { ...state , data: action.payload };
        case Actions.FETCH_LOGIN_OUT_FAILED:
            return { ...state , errrorLoading: action.payload };
        case Actions.LOADING_LOGIN_OUT:
            return  { ...state , loading: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    authUserData: authorizationReducer
});