import PageContractModel from "../../models/PageContractModel";
import HomePage from './HomePageComponent';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная'
});