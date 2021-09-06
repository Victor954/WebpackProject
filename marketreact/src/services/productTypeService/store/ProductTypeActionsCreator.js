import * as Actions from './PropductTypeActions';
import { getActions } from './../../helperService/ActionsCreatorHelper';

export const loadProductTypesTree = getActions({
    failedType: Actions.FETCH_LOAD_PRODUCT_TYPES_TREE_FAILED,
    succeededType: Actions.FETCH_LOAD_PRODUCT_TYPES_TREE_SUCCEEDED,
    requestType: Actions.FETCH_LOAD_PRODUCT_TYPES_TREE_REQUEST,
    loadingType: Actions.LOADING_LOAD_PRODUCT_TYPES_TREE
});