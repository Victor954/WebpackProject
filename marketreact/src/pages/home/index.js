import PageContractModel from "../../helpers/contracts/PageContractModel";
import HomePage from './HomePageComponent';

import { ShowStateModelEnum } from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    modulesContracts: [ ],
    servicesContracts: [ ],
    menuLink: '/',
    showMode: ShowStateModelEnum.show,
    pageCode: 'home'
});