import PageContractModel from "../../helpers/contracts/PageContractModel";
import LoginPage from './LoginPageComponent';
import ShowModeEnum from '../../helpers/models/ShowModeEnum';

export default new PageContractModel({
    PageComponent: LoginPage,
    levelAccess: 0,
    menuItemName: 'Войти',
    modulesContracts: [  ],
    servicesContracts: [  ],
    menuLink: '/login',
    showMode: ShowModeEnum.neverShow
});