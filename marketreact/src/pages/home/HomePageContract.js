import PageContractModel from "../../models/PageContractModel";
import HomePage from './HomePageComponent';
import Store from './localStore/HomePageStore';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    store: Store
});