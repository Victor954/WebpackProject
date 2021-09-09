import PageContractModel from "../../helpers/contracts/PageContractModel";
import ProductsPage from './ProdutsPageComponent';

import ProductsModuleContract from './../../modules/products';
import ProductServiceContract from './../../services/productService';
import { ShowStateModelEnum } from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: ProductsPage,
    levelAccess: 0,
    modulesContracts: [ ProductsModuleContract ],
    servicesContracts: [ ProductServiceContract ],
    showMode: ShowStateModelEnum.neverShow,
    pageCode: 'products'
});