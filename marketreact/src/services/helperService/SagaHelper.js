import { call, put } from 'redux-saga/effects'

export function* fetchServiceBase({apiMethod , payload ,action_loading , action_succeeded  , action_failed}) {

    try {
        yield put(action_loading(true));

       const data = yield  call(apiMethod , payload);

       yield put(action_loading(false));
       yield put(action_succeeded(data));

       return data;

    } catch (e) {
       yield put(action_failed(e.message));

       return e;
    }

}