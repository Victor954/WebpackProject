import { put, takeLatest , call } from 'redux-saga/effects'
import * as actionsCreator from './AuthActionsCreator';
import { FETCH_LOGINING_REQUEST  , FETCH_CHECK_UNIQUE_EMAIL_REQUEST } from './AuthActions';
import { fetchServiceBase } from '../../helperService/SagaHelper';
import { getUser } from '../../userService/store/UserActionsCreator'

import * as Api from '../api/LoginApi';
import * as RegisterApi from '../api/RegisterApi';


function* fetchLogining(action) {
    
    const data = yield call(fetchServiceBase ,{
        apiMethod: Api.LoginingCheck,
        payload: action.payload,
        ...actionsCreator.logining
    });

    if(!data.isException) {

        const { pathname } = action.payload;

        yield put (getUser.action_request({pathname}));
    }
}

function* fetchCheckEmailUnique(action) {

    yield fetchServiceBase({
        apiMethod: RegisterApi.checkUniqueEmail,
        payload: action.payload,
        ...actionsCreator.checkUniqueEmail
    });
}

export default function* productsSaga() {
    yield takeLatest(FETCH_LOGINING_REQUEST , fetchLogining);
    yield takeLatest(FETCH_CHECK_UNIQUE_EMAIL_REQUEST , fetchCheckEmailUnique)
 }