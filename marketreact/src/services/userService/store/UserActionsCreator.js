import { getActions } from './../../helperService/ActionsCreatorHelper';
import * as Actions from './UserActions';

export const getUser = getActions({
    failedType: Actions.FETCH_USER_FAILED,
    succeededType: Actions.FETCH_USER_SUCCEEDED,
    requestType: Actions.FETCH_USER_REQUEST,
    loadingType: Actions.LOADING_USER
});

export const getUserWithRedirect = getActions({
    failedType: Actions.FETCH_USER_FAILED,
    succeededType: Actions.FETCH_USER_SUCCEEDED,
    requestType: Actions.FETCH_USER_REQUEST_WITH_REDIRECT,
    loadingType: Actions.LOADING_USER
});