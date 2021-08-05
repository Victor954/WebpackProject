import { takeLatest } from 'redux-saga/effects'
import * as actionsCreator from './UserActionsCreator';
import { FETCH_USER_REQUEST } from './UserActions';
import { fetchServiceBase } from '../../helperService/SagaHelper';

import * as Api from '../api/UserApi';

function* fetchUser(action) {

    yield fetchServiceBase({
      apiMethod: Api.GetUser,
      ...actionsCreator.getUser
    });
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_USER_REQUEST, fetchUser);
 }