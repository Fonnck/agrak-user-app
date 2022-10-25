import { FC, Key } from 'react'
import { Button, Col, Row, Table, Tooltip, User } from '@nextui-org/react';
import { AiOutlineEdit } from 'react-icons/ai';
import { useLocation } from 'wouter';

import { User as IUser } from '../../interfaces'
import { IconButton } from '../generic-components';

interface Props {
    userList: IUser[]
}

export const UserTable: FC<Props> = ({ userList }) => {

    const [location, setLocation] = useLocation();

    return (
        <div className="table_container animate__animated animate__backInLeft">
            <Table
                aria-label="Table of user"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header>
                    <Table.Column
                        key='names'
                        align="start"
                    >
                        NAMES
                    </Table.Column>
                    <Table.Column
                        key='actions'
                        align="center"
                    >
                        ACTIONS
                    </Table.Column>
                </Table.Header>
                <Table.Body>
                    {userList.map((user: IUser, index) =>
                        <Table.Row key={index}>
                            <Table.Cell>
                                <div style={{ display: 'flex', justifyContent: 'start', marginRight: '5rem' }}>
                                    <User size="xl" squared src={user.avatar} name={`${user.first_name} ${user.second_name}`} css={{ p: 0 }}>
                                        {user.email}
                                    </User>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="flex-end" css={{ marginLeft: '5rem' }}>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Edit User" placement="right">
                                            <IconButton onClick={() => { setLocation(`/user-control/${user.id}/update`) }}>
                                                <AiOutlineEdit />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
}
