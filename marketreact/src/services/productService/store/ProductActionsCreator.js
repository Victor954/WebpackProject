import * as Actions from './PropductActions';
import { getActions } from './../../helperService/ActionsCreatorHelper';

export const loadProducts = getActions({
    failedType: Actions.FETCH_LOAD_PRODUCTS_FAILED,
    succeededType: Actions.FETCH_LOAD_PRODUCTS_SUCCEEDED,
    requestType: Actions.FETCH_LOAD_PRODUCTS_REQUEST,
    loadingType: Actions.LOADING_LOAD_PRODUCTS
});