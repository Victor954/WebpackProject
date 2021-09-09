import { fetchAddress } from '../../../../package.json';

export function GetProductsRequest({filter, routeParams , page}) {
   
   const url = new URL(`${fetchAddress}/Product/GetProducts`);
   url.search = new URLSearchParams({...filter,...routeParams, page}).toString();

   return fetch(url)
      .then(response => response.json());
}