export async function LoginIn({login , email , password}) {

    return await new Promise((reslove, reject) => {
 
      if(password === '1') {

         reslove(
            {
               token: '2HADT&AdfhhDSD',
               login: login,
               email: email
            });

      } else{
         reject({ message: 'Неверный логин или пароль'});
      }
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

         if(password !== '1'){
            reslove({
               isException: true,
               msg: 'Не верный логин или пароль'
            })
         }
      } , 5000);

   });
}