import { takeLatest , call ,put } from 'redux-saga/effects'
import * as actionsCreator from './ProductActionsCreator';
import * as actions from './PropductActions';
import * as Api from '../api/ProductApi';

function* fetchLoadProduts(action) {

    try {

        const data = yield call(Api.GetProductsRequest , action.payload);
        yield put(actionsCreator.loadProducts.action_succeeded(data));
    }
    catch (exception){
      yield put(actionsCreator.loadProducts.action_failed(exception));
    }
 }

 export default function* productsSaga() {
   yield takeLatest(actions.FETCH_LOAD_PRODUCTS_REQUEST, fetchLoadProduts);
 }