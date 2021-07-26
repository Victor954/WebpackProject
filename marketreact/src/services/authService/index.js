import ServiceContractModel from '../../helpers/contracts/ServiceContractModel';
import rootReducer from './store/AuthReducers';
import rootSaga from './store/AuthSaga';


export default new ServiceContractModel({
    saga: rootSaga,
    reducer: rootReducer,
    code: 'authServiceModel'
});