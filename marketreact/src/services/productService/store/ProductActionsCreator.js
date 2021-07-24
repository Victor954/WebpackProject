import * as Actions from './PropductActions';

const getAction = (type) => {

    return (value) => {

        return {
            type: type,
            payload: value
        }
    }
}

const getActions = ({ failedType , succeededType , requestType , loadingType }) => {

    return {
        action_failed: getAction(failedType),
        action_succeeded: getAction(succeededType),
        action_request: getAction(requestType),
        action_loading: getAction(loadingType)
    }
}

export const loadProducts = getActions({
    failedType: Actions.FETCH_LOAD_PRODUCTS_FAILED,
    succeededType: Actions.FETCH_LOAD_PRODUCTS_SUCCEEDED,
    requestType: Actions.FETCH_LOAD_PRODUCTS_REQUEST,
    loadingType: Actions.LOADING_LOAD_PRODUCTS
})

export const addProduct = getActions({
    failedType: Actions.FETCH_ADD_PRODUCT_FAILED,
    succeededType: Actions.FETCH_ADD_PRODUCT_SUCCEEDED,
    requestType: Actions.FETCH_ADD_PRODUCT_REQUEST,
    loadingType: Actions.LOADING_ADD_PRODUCT
})