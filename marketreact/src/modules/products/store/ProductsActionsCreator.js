import * as actions  from './ProductsActions';

export function action_test_product_module(value) {
    return {
        type: actions.TEST_PRODUCTS_MODULE,
        value: value
    }
}