import MainComponent from './components/LoginMainComponent';
import ModuleContractModel from '../../../helpers/contracts/ModuleContractModel';


export default new ModuleContractModel({
    MainComponent: MainComponent,
    code: 'loginModule'
});