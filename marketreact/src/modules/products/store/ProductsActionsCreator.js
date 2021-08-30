import * as actions  from './ProductsActions';

export function action_set_filter_product_module(value) {
    return {
        type: actions.SET_FILTER_PRODUCTS_MODULE,
        payload: value
    }
}