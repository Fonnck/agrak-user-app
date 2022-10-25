import { FC } from "react";
import { Grid } from "@nextui-org/react"
import 'animate.css';

import { User } from '../../interfaces';
import { UserInfo } from './UserInfo';


interface Props {
    userList: User[]
}

export const UserList: FC<Props> = ({ userList }) => {

    return (
        <Grid.Container gap={2}>
            {
                userList.map((user: User) =>
                    <UserInfo key={user.id} user={user} />
                )
            }
        </Grid.Container>
    )
}
