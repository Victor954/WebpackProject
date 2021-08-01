import { getState } from './../../helperService/StateHelper';

export const loginingDataState = getState({
    form: {
        isException: false,
        msg: ''
    }
});


export const registeringDataState = getState({
    login: {
        isException: false,
        msg: ''
    },
    email: {
        isException: false,
        msg: ''
    },
    form: {
        isException: false,
        msg: ''
    }
});