export const reducerServiceSaga = (state , action , { typeSucceeded , typeLoading , typeFailed }) => {
    
    switch(action.type) {
        
        case typeSucceeded:
            return { ...state , data: action.payload };
        case typeLoading:
            return { ...state , loading: action.payload };
        case typeFailed:
            return  { ...state , errorLoading: action.payload };
        default:
            return state;
    }
}