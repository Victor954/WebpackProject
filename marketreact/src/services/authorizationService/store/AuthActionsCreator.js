import { getActions } from './../../helperService/ActionsCreatorHelper';
import * as Actions from './AuthActions';

export const checkUniqueEmail = getActions({
    failedType: Actions.FETCH_CHECK_UNIQUE_EMAIL_FAILED,
    succeededType: Actions.FETCH_CHECK_UNIQUE_EMAIL_SUCCEEDED,
    requestType: Actions.FETCH_CHECK_UNIQUE_EMAIL_REQUEST,
    loadingType: Actions.CHECK_UNIQUE_EMAIL_LOGINING
});

export const logining = getActions({
    failedType: Actions.FETCH_LOGINING_FAILED,
    succeededType: Actions.FETCH_LOGINING_SUCCEEDED,
    requestType: Actions.FETCH_LOGINING_REQUEST,
    loadingType: Actions.LOADING_LOGINING
})

export const action_backup_loading = (value) => {
    return {
        type: Actions.FETCH_LOGINING_BACKUP,
        payload: value
    }
}

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