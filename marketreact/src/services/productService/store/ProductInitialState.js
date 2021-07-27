import { getState } from '../../helperService/StateHelper';

export const loadProductsState = getState([]);

export const addProductState = getState({
    id: 0,
    title: '',
    discription: ''
});