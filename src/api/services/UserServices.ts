import { Observable } from 'rxjs';
import axios from '../axios-setup/axios.services'
import { User } from '../../interfaces/user.interface';


/**
 * Provides services realeated to users info
 */
export class UserServices {

    private url = '/users';

    //... put all user services here

    /**
     * Brings all user
     * @returns Server api response with all users
     */
    public getUserList = (): Observable<User[]> => {
        return axios.get(this.url);
    }

    /**
     * Brings a specific user info
     * @param userId of user requested
     * @returns Server response with user info
     */
    public getUser = (userId: string): Observable<User> => {
        return axios.get(`${this.url}/${userId}`);
    }

    /**
     * Creates a new user
     * @param newUser Values of user object
     * @returns Server response with new user info
     */
    public createUser = (newUser: User): Observable<any> => {
        return axios.post(this.url, newUser);
    }

    /**
     * Update user info
     * @param userInfo Values of user object
     * @returns Server response with user info updated
     */
    public updateUser = (userInfo: User): Observable<any> => {
        return axios.put(`${this.url}/${userInfo.id}`, userInfo);
    }

    /**
     * Delete a specific user
     * @param userId of user deleted
     * @returns Server response with user info deleted
     */
    public deleteUser = (userId: string): Observable<any> => {
        return axios.delete(this.url, userId);
    }



}