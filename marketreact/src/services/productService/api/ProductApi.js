export async function GetProductsRequest({filter , page}) {
   
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
         page:1,
         count:0,
         countAtPage:20,
         countPage:0
      }

       setTimeout(() => {
          reslove(filtering);
       } , 2000);
    });
 }