import { getState } from './../../helperService/StateHelper';


export const authUserDataStore = getState({
    token: null,
    login: '',
    email: ''
});