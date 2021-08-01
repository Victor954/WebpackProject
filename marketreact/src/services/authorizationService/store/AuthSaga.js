import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionsCreator from './AuthActionsCreator';
import { FETCH_LOGINING_REQUEST  , FETCH_LOGIN_IN_REQUEST, FETCH_LOGIN_OUT_REQUEST } from './AuthActions';
import * as Api from '../api/LoginApi';


function* fetchLogining(action) {
    try {

        yield put(actionsCreator.logining.action_loading(true));

       const loginingData = yield call(Api.LoginingCheck , action.payload);

       yield put(actionsCreator.logining.action_loading(false));
       yield put(actionsCreator.logining.action_succeeded(loginingData));
    } catch (e) {
        yield put(actionsCreator.logining.action_failed(e.message));
    }
}

function* fetchLoginIn(action) {
    try {

        yield put(actionsCreator.loginIn.action_loading(true));

       const loginData = yield call(Api.LoginIn , action.payload);

       yield put(actionsCreator.loginIn.action_loading(false));
       yield put(actionsCreator.loginIn.action_succeeded(loginData));
    } catch (e) {
        yield put(actionsCreator.loginIn.action_failed(e.message));
    }
 }

 function* fetchLoginOut(action) {
    try {

        yield put(actionsCreator.loginOut.action_loading(true));

       const loginData = yield call(Api.LoginOut);

       yield put(actionsCreator.loginOut.action_loading(false));
       yield put(actionsCreator.loginOut.action_succeeded(loginData));
    } catch (e) {
        yield put(actionsCreator.loginOut.action_failed(e.message));
    }
 }

 export default function* productsSaga() {
    yield takeLatest(FETCH_LOGINING_REQUEST , fetchLogining);
 }