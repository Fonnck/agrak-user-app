import { useEffect, useState } from 'react'
import { Container, Grid, Loading } from "@nextui-org/react";
import { UserList } from '../generic-components';
import { UserServices } from '../../api/services';
import { User } from '../../interfaces';

const _usersService = new UserServices();

export const Home = () => {

    const [userList, setUserList] = useState<User[]>([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        _usersService.getUserList()
            .subscribe((resp) => {
                console.log(resp);
                setUserList(resp);
            })
    }

    return (
        <div style={{ marginTop: '100px' }}>
            {userList.length === 0 ?
                <Loading type="points" size='xl' color="warning" />
                :
                <UserList userList={userList} />
            }
        </div>
    )
}
