import { Observable } from 'rxjs';
import axios from '../axios-setup/axios.services'
import { User } from '../../interfaces/user.interface';


/**
 * Provides services realeated to users info
 */
export class UserServices {

    private url = '/users';

    /**
     * Service that brings all user
     * @returns Server api responser with all users
     */
    public getUserList = (): Observable<User[]> => {
        return axios.get(this.url);
    }

    //... put all user services here

    public createUser = (newUser: User): Observable<any> => {
        return axios.post(this.url, newUser);
    }

}