import ServiceContractModel from '../../helpers/contracts/ServiceContractModel';
import rootReducer from './store/ProductTypeReducers';
import rootSaga from './store/ProductTypeSaga';

export default new ServiceContractModel({
    saga: rootSaga,
    reducer: rootReducer,
    code: 'productTypeServiceModel'
});