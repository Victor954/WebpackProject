import MainProductsContract from "../../modules/products";
import { all } from 'redux-saga/effects'


const pageContractsCollection = [
    MainProductsContract
]


export function getReducer() {

    const entiresArray = pageContractsCollection.map(contract => [contract.moduleCode , contract.reducers]);
    
    return Object.fromEntries(new Map(entiresArray));
}

export function getSaga() {

    return function* rootSaga() {
        yield all( pageContractsCollection.map(contract => contract.saga()) );
      }
}