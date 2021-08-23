export async function GetProductsRequest({filter , page}) {
   
   fetch('https://localhost:5001/Product/GetProducts').then(response => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
   })
   .catch(error => {
       console.log(error);
   });

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