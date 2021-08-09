import { combineReducers } from 'redux';

import * as Actions from './MainActions';
import * as State from './MainInitialState';

const redirectReducer = (state = State.redierctState, action) => {

    switch(action.type) {
        case Actions.REDIRECT_TO_PAGE:
            return { ...state , url: action.payload, send: true }
        default:
            return state;
    }
}

export default combineReducers({
    redirectData: redirectReducer
});