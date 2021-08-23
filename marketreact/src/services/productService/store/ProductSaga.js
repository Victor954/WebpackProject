import { takeLatest , call } from 'redux-saga/effects'
import * as actionsCreator from './ProductActionsCreator';
import { FETCH_PRODUCTS_REQUEST } from './PropductActions';
import * as Api from '../api/ProductApi';
import { fetchModelBase } from '../../helperService/SagaHelper';

function* fetchLoadProduts(action) {

    try {
        const { data , paginationData } = yield call(Api.GetProductsRequest , action.payload);

        fetchModelBase({
          model: data,
          ...actionsCreator.loadProducts
        })
    }
    catch (e){

    }
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchLoadProduts);
 }