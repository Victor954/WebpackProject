import { fetchAddress } from '../../../../package.json';

export function GetProductTypesTreeRequest() {
   
   const url = `${fetchAddress}/ProductTypes/GetTypesTree`;
   return fetch(url)
      .then(response => response.json());
}