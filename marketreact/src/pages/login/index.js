import PageContractModel from "../../helpers/contracts/PageContractModel";
import LoginPage from './LoginPageComponent';

export default new PageContractModel({
    PageComponent: LoginPage,
    levelAccess: 0,
    menuItemName: 'Главная',
    modulesContracts: [  ],
    servicesContracts: [  ]
});