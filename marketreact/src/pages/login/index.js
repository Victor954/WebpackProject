import PageContractModel from "../../contracts/PageContractModel";
import LoginPage from './LoginPageComponent';
import AuthServiceContract from './../../services/authService';

export default new PageContractModel({
    PageComponent: LoginPage,
    levelAccess: 0,
    menuItemName: 'Главная',
    modulesContracts: [  ],
    servicesContracts: [  ]
});