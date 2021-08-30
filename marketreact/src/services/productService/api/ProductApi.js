import { fetchAddress } from '../../../../package.json';

export function GetProductsRequest({filter , page}) {
   
   const url = new URL(`${fetchAddress}/Product/GetProducts`);
   url.search = new URLSearchParams({...filter, page}).toString();

   return fetch(url)
      .then(response => response.json());
}