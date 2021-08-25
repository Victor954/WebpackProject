import { getState } from '../../helperService/StateHelper';

export const loadProductState = getState({
    count: 0,
    data: [],
    page: 1,
    pageCount: 0,
});