import PageContractModel from "../../helpers/contracts/PageContractModel";
import CartPage from './CartPageComponent';

import { ShowStateModelEnum } from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: CartPage,
    levelAccess: 0,
    menuItemName: 'Корзина',
    modulesContracts: [ ],
    servicesContracts: [ ],
    menuLink: '/cart',
    showMode: ShowStateModelEnum.neverShow,
    pageCode: 'cart'
});