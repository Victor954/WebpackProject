import { takeLatest , put } from 'redux-saga/effects'
import * as actionsCreator from './UserActionsCreator';
import { FETCH_USER_REQUEST } from './UserActions';
import { fetchServiceBase } from '../../helperService/SagaHelper';
import { action_redirect_to_page} from '../../mainService/store/MainActionsCreator';

import * as Api from '../api/UserApi';

function* fetchUser(action) {

    yield fetchServiceBase({
      apiMethod: Api.GetUser,
      ...actionsCreator.getUser
    });

    const { pathname } = action.payload

    if(pathname && pathname !== '') {
      yield put(action_redirect_to_page(pathname))
    }
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_USER_REQUEST, fetchUser);
 }