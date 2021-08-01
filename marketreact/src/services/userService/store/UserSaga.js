import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionsCreator from './UserActionsCreator';
import { FETCH_USER_REQUEST } from './UserActions';
import * as Api from '../api/UserApi';

function* fetchUser(action) {
    try {

        yield put(actionsCreator.getUser.action_loading(true));

       const loginData = yield call(Api.GetUser);

       yield put(actionsCreator.getUser.action_loading(false));
       yield put(actionsCreator.getUser.action_succeeded(loginData));
    } catch (e) {
        yield put(actionsCreator.getUser.action_failed(e.message));
    }
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_USER_REQUEST, fetchUser);
 }