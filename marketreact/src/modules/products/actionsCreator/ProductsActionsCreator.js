import { SET_POSTS_DATA } from '../actions/ProductsActions'

export function action_set_posts_data(value) {
    return {
        type: SET_POSTS_DATA,
        value: value
    }
}