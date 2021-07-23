import PageContractModel from "../../models/PageContractModel";
import HomePage from './HomePageComponent';
import * as rootReducerSaga from './HomePageReducer';


export default new PageContractModel({
    PageComponent: HomePage,
    levelAccess: 0,
    menuItemName: 'Главная',
    reducersObject: rootReducerSaga.getReducer(),
    saga: rootReducerSaga.getSaga()
});