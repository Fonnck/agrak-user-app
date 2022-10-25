import { useEffect } from 'react'
import { Loading } from "@nextui-org/react";

import { UserServices } from '../../api/services';
import { UserList, UserTable } from '../user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUserList } from '../../redux/slices/users.slice';

const _usersService = new UserServices();

export const Home = () => {

    /* const [userList, setUserList] = useState<User[]>([]) */
    const userList = useAppSelector((state) => state.users.userList);
    const view = useAppSelector((state) => state.viewSlice.view);

    const dispatch = useAppDispatch();

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        _usersService.getUserList()
            .subscribe((resp) => {
                dispatch(setUserList(resp));
            })
    }

    return (
        <div style={{ marginTop: '100px' }}>
            {userList.length === 0 ?
                <Loading type="points" size='xl' color="warning" />
                :
                (view === 0 ?
                    <UserList userList={userList} />
                    :
                    <UserTable userList={userList} />
                )
            }
        </div>
    )
}

{/*  */ }