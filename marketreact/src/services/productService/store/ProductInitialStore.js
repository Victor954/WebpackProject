import { getState } from './../../helperService/StateHelper';

export const loadProductsStore = getState([]);

export const addProductStore = getState({
    id: 0,
    title: '',
    discription: ''
});