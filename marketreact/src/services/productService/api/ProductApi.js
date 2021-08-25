import { fetchAddress } from '../../../../package.json';

export async function GetProductsRequest({filter , page}) {
   
   const url = new URL(`${fetchAddress}/Product/GetProducts`);
   url.search = new URLSearchParams({...filter, page}).toString();

   const data  = await  fetch(url).then(response => response.json());

   return data;
}