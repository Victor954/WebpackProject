export async function LoginIn({login , email , password}) {

    return await new Promise((reslove, reject) => {

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

export async function LoginingCheck({login , email , password}) {

   return await new Promise((reslove, reject) => {

      setTimeout(() => {

         if(password !== '123456abc'){
            reslove({
               isException: true,
               msg: 'Не верный логин или пароль'
            })
         }
         else {
            reslove({
               isException: false,
               msg: ''
            })
         }
      } , 5000);

   });
}