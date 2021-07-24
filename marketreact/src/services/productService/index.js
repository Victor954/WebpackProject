import ServiceContractModel from '../../contracts/ServiceContractModel';
import rootReducer from './store/ProductReducers';
import rootSaga from './store/ProductSaga';

export default new ServiceContractModel({
    saga: rootSaga,
    reducer: rootReducer,
    code: 'productServiceModel'
});