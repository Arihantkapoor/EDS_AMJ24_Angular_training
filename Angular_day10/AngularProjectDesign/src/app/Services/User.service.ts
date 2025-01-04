import { User } from "../Models/User";

export class UserService{

    getdate(): User{
        let userModel = new User();
        userModel.name = 'Arihant';
        userModel.email = 'arihant@gmail.com';
        userModel.phoneNumber = 8869086529;
        userModel.course = 'Angular';

        return userModel;
    }
}