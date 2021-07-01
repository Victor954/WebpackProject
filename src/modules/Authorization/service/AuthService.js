export default class AuthService {

    logIn() {
        return new Promise((reslove) => {

            reslove({
                user: { name: "User", Email: "Usereact@gmail.com" },
                isLoggined: true
            });
        });
    }

    logOut() {

        return new Promise((reslove) => {

            reslove({
                user: null,
                isLoggined: false
            });
        });
    }
}