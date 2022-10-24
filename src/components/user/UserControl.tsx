import { useEffect, useState } from 'react';
import { Button, Card, Col, Image, Input, Row, Text, useSSR } from "@nextui-org/react"

import { User } from "../../interfaces";
import no_avatar from '../../assets/img/no_avatar.png';

export const UserControl = () => {


    const [user, setUser] = useState<User>({
        createdAt: '',
        avatar: '',
        first_name: '',
        second_name: '',
        email: '',
        id: '',
    })

    useEffect(() => {

    }, [])


    return (
        <div style={{ width: '100%', height: 'auto', marginTop: '80px' }}>
            <div className="card-glass animate__animated animate__backInUp">
                <Row className="avatar-container">
                    <Image
                        css={{ maxWidth: '400px' }}
                        className="avatar-select"
                        src={no_avatar}
                        alt="avatar img"
                        objectFit='cover'
                    />
                    <div className="avatar-hiden">
                        <Button flat>
                            Choose an Avatar
                        </Button>
                    </div>
                </Row>
                <Row>
                    <Text>Please provide the user information</Text>
                </Row>
                <Row css={{ gap: 15 }}>
                    <Col>
                        <Input css={{ width: '100%' }} labelPlaceholder="First Name" />
                    </Col>
                    <Col>
                        <Input css={{ width: '100%' }} labelPlaceholder="Second Name" />
                    </Col>
                </Row>
                <Input labelPlaceholder="E-mail" />
                <Row className="center">
                    <Button flat color="gradient">
                        CREATE
                    </Button>
                </Row>
            </div>
        </div>
    )
}
