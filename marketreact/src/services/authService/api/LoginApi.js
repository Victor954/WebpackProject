export async function LoginIn() {

    return await new Promise((reslove, reject) => {
 
       setTimeout(() => {

          reslove(
             {
                token: '2HADT&AdfhhDSD',
                login: 'User',
                email: 'User@test.gmail.com'
             });
       } , 2000);
    });
 }

 export async function LoginOut() {

    return await new Promise((reslove, reject) => {
 
        setTimeout(() => {
 
           reslove(
              {
                 token: null,
                 login: '',
                 email: ''
              });
        } , 2000);
     });
 }