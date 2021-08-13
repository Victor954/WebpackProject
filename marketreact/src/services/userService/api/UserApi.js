async function getUserAsync() {

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

export async function GetUser() {


    const cachedUserData = {
        token: localStorage.getItem('token'),
        login: localStorage.getItem('login'),
        email: localStorage.getItem('email')
    } 

    if(cachedUserData.token) {
        return cachedUserData;
    }

    const userData = await getUserAsync();

    for (const [key, value] of Object.entries(userData)) {
        localStorage.setItem(key , value);
    }

    return userData;
 }
