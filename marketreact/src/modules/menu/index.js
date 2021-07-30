import MainComponent from './components/MenuMainComponent';
import ModuleContractModel from '../../helpers/contracts/ModuleContractModel';
import rootReducer from './store/MenuReducers';

export default new ModuleContractModel({
    MainComponent: MainComponent,
    code: 'menuModule',
    reducer: rootReducer
});