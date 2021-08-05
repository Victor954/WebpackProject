import { call, put } from 'redux-saga/effects'

export function* fetchServiceBase({apiMethod , payload , middleware ,action_loading , action_succeeded  , action_failed}) {

    try {
        yield put(action_loading(true));

       const data = yield  call(apiMethod , payload);

       yield put(action_loading(false));
       yield put(action_succeeded(data));

       if(middleware !== undefined) {

            const middlewareAction = middleware(data);

            if(middlewareAction)
                yield put(middlewareAction);
       }

    } catch (e) {
       yield put(action_failed(e.message));
    }

}