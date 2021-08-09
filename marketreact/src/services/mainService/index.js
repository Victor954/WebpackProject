import ServiceContractModel from '../../helpers/contracts/ServiceContractModel';
import rootReducer from './store/MainReducers';


export default new ServiceContractModel({
    reducer: rootReducer,
    code: 'mainServiceModel'
});