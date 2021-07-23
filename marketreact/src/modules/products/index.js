import MainComponent from './components/ProductsMainComponent';
import ModuleContractModel from '../../models/ModuleContractModel';

import saga from './store/reducers/ProductsSaga';
import rootReducers from './store/reducers/PropductsReducers';


export default new ModuleContractModel({
    MainComponent: MainComponent,
    saga: saga,
    reducers: rootReducers,
    moduleCode: 'productsModule'
});