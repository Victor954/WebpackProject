import { combineReducers } from 'redux';

import * as Actions from './AuthActions';
import * as State from './AuthInitialState';

const loginingReducer = (state = State.loginingDataState , action) => {

    switch(action.type) {
        case Actions.FETCH_LOGINING_BACKUP:
            return { ...state , data: { ...state.data, form: {msg: '' , isException: false} } };
        case Actions.FETCH_LOGINING_SUCCEEDED:
            return { ...state , data: { ...state.data, form: action.payload } };
        case Actions.LOADING_LOGINING:
            return { ...state , loading: action.payload };
        case Actions.FETCH_LOGINING_FAILED:
            return  { ...state , errorLoading: action.payload };
        default:
            return state;
    }
}
const registeringReducer = (state = State.registeringDataState , action) => {

    switch(action.type) {

        default:
            return state;
    }
}


export default combineReducers({
    loginingData: loginingReducer,
    registeringData: registeringReducer
});