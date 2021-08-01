import PageContractModel from "../../helpers/contracts/PageContractModel";
import LoginPage from './LoginPageComponent';
import LoginModuleContract from '../../modules/authorization/login';
import RegisterModuleContract from '../../modules/authorization/register';

import AuthorizationServiceContract from '../../services/authorizationService';

import { ShowStateModelEnum } from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: LoginPage,
    levelAccess: 0,
    menuItemName: 'Войти',
    modulesContracts: [ LoginModuleContract , RegisterModuleContract ],
    servicesContracts: [ AuthorizationServiceContract ],
    menuLink: '/login',
    showMode: ShowStateModelEnum.neverShow,
    pageCode: 'login'
});