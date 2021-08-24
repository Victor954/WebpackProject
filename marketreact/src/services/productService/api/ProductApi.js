import { fetchAddress } from '../../../../package.json';

export async function GetProductsRequest({filter , page}) {
   
   const data  = await  fetch(`${fetchAddress}/Product/GetProducts`).then(response => response.json());

   console.log(data);

   
   const getPost = (index) => ({
      id: index, 
      title: `Test ${index}`,
      discription: `Test discription ${index}`,
      photo: '/productsModule/images/image.jpg',
      date: new Date(1995 + index, 11, 17)
   });

   const posts = [...Array(100).keys()].map(index => getPost(index));

    return await new Promise((reslove, reject) => {
      
      const { title } = filter; 

      const filtering = posts.filter(postData => postData.title.indexOf(title) > -1);

      const paginationData = {
         page:page,
         count:0,
         countAtPage:20,
         countPage:0
      }

      const data = {
         data: filtering.slice(page - 1 * 20,20),
         paginationData:  paginationData
      }

       setTimeout(() => {
          reslove(data);
       } , 2000);
    });
 }