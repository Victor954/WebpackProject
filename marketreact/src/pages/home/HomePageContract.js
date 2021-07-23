import PageContractModel from "../../models/PageContractModel";
import HomePage from './HomePageComponent';
import rootReducer from './HomePageReducer';

export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    store: rootReducer
});