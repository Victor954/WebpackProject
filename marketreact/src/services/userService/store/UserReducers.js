import { combineReducers } from 'redux';

import * as Actions from './UserActions';
import * as State from './UserInitialState';

const userReducer = (state = State.userDataStore, action) => {

    switch(action.type) {
        
        case Actions.FETCH_USER_SUCCEEDED:
            return { ...state , data: action.payload };
        case Actions.FETCH_USER_FAILED:
            return { ...state , errrorLoading: action.payload };
        case Actions.LOADING_USER:
            return  { ...state , loading: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    userData: userReducer
});