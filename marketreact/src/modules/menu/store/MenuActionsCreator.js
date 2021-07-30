import * as actions  from './MenuActions';

export function action_visible_user_menu_module(value) {
    return {
        type: actions.VISIBLE_USER_MENU_MODULE,
        payload: value
    }
}