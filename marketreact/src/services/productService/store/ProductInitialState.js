import { getState } from '../../helperService/StateHelper';

export const loadProductState = getState([]);

export const paginationProductState = {
    page: 1, 
    count: 0,
    countAtPage: 20,
    countPage: 0
};

export const filterProductState = {
    title: '',
    maxPrice: 1000,
    minPrice: 0
};