import { combineReducers } from 'redux';
import { reducerServiceSaga } from '../../helperService/ReducerHelper';

import * as Actions from './AuthActions';
import * as State from './AuthInitialState';


const loginingReducer = (state = State.loginingDataState , action) => {

    switch(action.type) {

        case Actions.FETCH_LOGINING_BACKUP:
            return { ...state , data: { msg: '' , isException: false }};
        default:
            return reducerServiceSaga(state , action , {
                typeFailed: Actions.FETCH_LOGINING_FAILED,
                typeLoading: Actions.LOADING_LOGINING,
                typeSucceeded: Actions.FETCH_LOGINING_SUCCEEDED
            });
    }
}

const emailCheckUniqueReducer = (state = State.emailCheckingDataState, action) => {

    switch(action.type) {

        default:
            return reducerServiceSaga(state , action , {
                typeFailed: Actions.FETCH_CHECK_UNIQUE_EMAIL_FAILED,
                typeLoading: Actions.CHECK_UNIQUE_EMAIL_LOGINING,
                typeSucceeded: Actions.FETCH_CHECK_UNIQUE_EMAIL_SUCCEEDED
            });
    }
}


export default combineReducers({
    checkEmailUniqueData: emailCheckUniqueReducer,
    loginingData: loginingReducer
});