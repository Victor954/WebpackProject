import PageContractModel from "../../helpers/contracts/PageContractModel";
import HomePage from './HeaderPageComponent';
import MenuModuleContract from './../../modules/menu';
import ProductTypeService from '../../services/productTypeService';

export default new PageContractModel({
    PageComponent: HomePage,
    modulesContracts: [ MenuModuleContract ],
    servicesContracts: [ ProductTypeService ],
    pageCode: 'header',
});