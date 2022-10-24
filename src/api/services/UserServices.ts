import { Observable } from 'rxjs';
import axios from '../axios-setup/axios.services'
import { User } from '../../interfaces/user.interface';


/**
 * Provides services realeated to users info
 */
export class UserServices {

    private url = '/users';

    public getUserList = (): Observable<User[]> => {

        return axios.get(this.url);

    }

    //... put all user services here

}