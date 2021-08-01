import { getState } from './../../helperService/StateHelper';

export const userDataStore = getState({
    token: null,
    login: '',
    email: ''
});