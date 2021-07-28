import PageContractModel from "../../helpers/contracts/PageContractModel";
import HomePage from './HomePageComponent';

import ProductsModuleContract from './../../modules/products';
import ProductServiceContract from './../../services/productService';
import ShowModeEnum from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    modulesContracts: [ ProductsModuleContract ],
    servicesContracts: [ ProductServiceContract ],
    menuLink: '/',
    showMode: ShowModeEnum.show
});