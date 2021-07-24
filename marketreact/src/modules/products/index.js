import MainComponent from './components/ProductsMainComponent';
import ModuleContractModel from '../../contracts/ModuleContractModel';

import rootReducer from './store/PropductsReducers';


export default new ModuleContractModel({
    MainComponent: MainComponent,
    reducer: rootReducer,
    code: 'productsModule'
});