import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionsCreator from './ProductActionsCreator';
import { FETCH_LOAD_PRODUCTS_REQUEST , FETCH_ADD_PRODUCT_REQUEST } from './PropductActions';
import * as Api from '../api/ProductApi';

function* fetchLoadProduts(action) {
    try {

        yield put(actionsCreator.loadProducts.action_loading(true));

       const products = yield call(Api.GetTestRequestData);

       yield put(actionsCreator.loadProducts.action_loading(false));
       yield put(actionsCreator.loadProducts.action_succeeded(products));
    } catch (e) {
        yield put(actionsCreator.loadProducts.action_failed(e.message));
    }
 }

 function* fetchAddProdut(action) {
    try {
        const products = yield call(Api.GetTestRequestData);
        yield put(actionsCreator.addProduct.action_succeeded(products));
     } catch (e) {
         yield put(actionsCreator.addProduct.action_failed(e.message));
     }
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_ADD_PRODUCT_REQUEST, fetchAddProdut);
   yield takeLatest(FETCH_LOAD_PRODUCTS_REQUEST, fetchLoadProduts);
 }