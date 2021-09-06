import { takeLatest } from 'redux-saga/effects'
import { fetchServiceBase } from '../../helperService/SagaHelper';
import * as actionsCreator from './ProductTypeActionsCreator';
import * as actions from './PropductTypeActions';
import * as Api from '../api/ProductTreeApi';

function* fetchLoadTypesTree(action) {

    yield fetchServiceBase({
      apiMethod: Api.GetProductTypesTreeRequest,
      payload: action.payload,
      ...actionsCreator.loadProductTypesTree
    });

 }

 export default function* productsSaga() {
   yield takeLatest(actions.FETCH_LOAD_PRODUCT_TYPES_TREE_REQUEST, fetchLoadTypesTree);
 }