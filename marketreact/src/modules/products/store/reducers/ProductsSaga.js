import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as actionsCreator from './../actionsCreator/ProductsActionsCreator';
import { PRODUCTS_FETCH_REQUEST } from './../actions/ProductsActions';
import * as Api from './../../api/ProductsApi';

function* fetchProduts(action) {
    try {
       const products = yield call(Api.GetTestRequestData);
       yield put(actionsCreator.action_products_fetch_succeeded(products));
    } catch (e) {
       yield put(actionsCreator.action_products_fetch_failed(e.message));
    }
 }

function* productsSaga() {
   yield takeEvery(PRODUCTS_FETCH_REQUEST, fetchProduts);
 }

 export default function* rootSaga() {
   yield all([
      productsSaga()
   ])
 }