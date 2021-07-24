import PageContractModel from "../../contracts/PageContractModel";
import HomePage from './HomePageComponent';

import ProductsModuleContract from './../../modules/products';
import ProductServiceContract from './../../services/productService';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    modulesContracts: [ ProductsModuleContract ],
    servicesContracts: [ ProductServiceContract ]
});