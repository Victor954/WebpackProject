import { getActions } from './../../helperService/ActionsCreatorHelper';
import * as Actions from './AuthActions';

export const loginIn = getActions({
    failedType: Actions.FETCH_LOGIN_IN_FAILED,
    succeededType: Actions.FETCH_LOGIN_IN_SUCCEEDED,
    requestType: Actions.FETCH_LOGIN_IN_REQUEST,
    loadingType: Actions.LOADING_LOGIN_IN
})

export const loginOut = getActions({
    failedType: Actions.FETCH_LOGIN_OUT_FAILED,
    succeededType: Actions.FETCH_LOGIN_OUT_SUCCEEDED,
    requestType: Actions.FETCH_LOGIN_OUT_REQUEST,
    loadingType: Actions.LOADING_LOGIN_OUT
})