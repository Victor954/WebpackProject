export async function GetUser() {

    return await new Promise((reslove, reject) => {
 
        setTimeout(() => {

            reslove(
                {
                    token: '2HADT&AdfhhDSD',
                    login: 'Login',
                    email: 'Email@Email.com'
                });
        } , 2000);
    });
 }
