import PageContractModel from "../../helpers/contracts/PageContractModel";
import LoginPage from './LoginPageComponent';
import LoginModuleContract from '../../modules/authorization/login';
import RegisterModuleContract from '../../modules/authorization/register';

import { ShowStateModelEnum } from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: LoginPage,
    levelAccess: 0,
    menuItemName: 'Войти',
    modulesContracts: [ LoginModuleContract , RegisterModuleContract ],
    servicesContracts: [  ],
    menuLink: '/login',
    showMode: ShowStateModelEnum.neverShow,
    pageCode: 'login'
});