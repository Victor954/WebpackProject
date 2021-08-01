import ServiceContractModel from '../../helpers/contracts/ServiceContractModel';
import rootReducer from './store/UserReducers';
import rootSaga from './store/UserSaga';


export default new ServiceContractModel({
    saga: rootSaga,
    reducer: rootReducer,
    code: 'userServiceModel'
});