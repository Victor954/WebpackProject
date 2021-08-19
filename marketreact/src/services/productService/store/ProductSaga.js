import { takeLatest } from 'redux-saga/effects'
import * as actionsCreator from './ProductActionsCreator';
import { FETCH_PRODUCTS_REQUEST } from './PropductActions';
import * as Api from '../api/ProductApi';
import { fetchServiceBase } from '../../helperService/SagaHelper';

function* fetchLoadProduts(action) {

    yield fetchServiceBase({
        apiMethod: Api.GetProductsRequest,
        payload: action.payload,
        ...actionsCreator.loadProducts
    })
 }

 export default function* productsSaga() {
   yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchLoadProduts);
 }