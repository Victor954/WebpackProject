import * as Actions from './MainActions';

export const action_redirect_to_page = (value) => {

    return {
        type:Actions.REDIRECT_TO_PAGE,
        payload: value
    }
}

export const action_redirect_to_page_restore= (value) => {

    return {
        type:Actions.REDIRECT_TO_PAGE_RESTORE,
        payload: value
    }
}