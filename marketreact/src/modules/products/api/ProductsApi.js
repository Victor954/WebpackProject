export async function GetTestRequestData() {

    return await new Promise((reslove, reject) => {
 
       setTimeout(() => {
          reslove([
             {
                id: 0,
                title: 'Title',
                discription: 'Discription'
             },
             {
                id: 1,
                title: 'Title1',
                discription: 'Discription1'
             },
             {
                id: 2,
                title: 'Title2',
                discription: 'Discription2'
             }
          ]);
       } , 2000);
    });
 }