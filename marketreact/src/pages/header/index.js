import PageContractModel from "../../helpers/contracts/PageContractModel";
import HomePage from './HeaderPageComponent';
import MenuModuleContract from './../../modules/menu';

export default new PageContractModel({
    PageComponent: HomePage,
    modulesContracts: [ MenuModuleContract ],
    servicesContracts: [  ],
    pageCode: 'header',
});