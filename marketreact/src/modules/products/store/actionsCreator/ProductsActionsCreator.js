import * as actions  from './../actions/ProductsActions';

export function action_products_fetch_request(value) {
    return {
        type: actions.PRODUCTS_FETCH_REQUEST,
        value: value
    }
}

export function action_products_fetch_succeeded(value) {
    return {
        type: actions.PRODUCTS_FETCH_SUCCEEDED,
        value: value
    }
}

export function action_products_fetch_failed(value) {
    return {
        type: actions.PRODUCTS_FETCH_FAILED,
        value: value
    }
}