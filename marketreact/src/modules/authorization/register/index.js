import MainComponent from './components/RegisterMainComponent';
import ModuleContractModel from '../../../helpers/contracts/ModuleContractModel';


export default new ModuleContractModel({
    MainComponent: MainComponent,
    code: 'registerModule'
});