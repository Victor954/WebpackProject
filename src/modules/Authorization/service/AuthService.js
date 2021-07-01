import { RolesEnum } from "../../../scripts/authorization/RolesEnum";

export default class AuthService {

    logIn() {
        return new Promise((reslove) => {

            reslove({
                user: { name: "User123", Email: "Usereact@gmail.com" , role: new RolesEnum().User },
                isLoggined: true
            });
        });
    }

    logOut() {

        return new Promise((reslove) => {

            reslove({
                user: { name: null , Email: null , role: new RolesEnum().Guest },
                isLoggined: false
            });
        });
    }
}