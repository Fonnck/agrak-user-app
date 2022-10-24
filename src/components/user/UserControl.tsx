import { useEffect, useState } from 'react';
import { Button, Col, Image, Input, Loading, Row, Text, useModal } from "@nextui-org/react"
import { useForm, SubmitHandler } from 'react-hook-form';

import { ToastAlert } from '../generic-components/Toaster'
import { AvatarSelect } from '../generic-components';
import { User } from "../../interfaces";
import no_avatar from '../../assets/img/no_avatar.png';
import { UserServices } from '../../api/services';
import { useLocation } from 'wouter';

const _userServices = new UserServices();

export const UserControl = () => {

    /* const [user, setUser] = useState<User | {}>({}); */

    const { Toasty } = ToastAlert();
    const [location, setLocation] = useLocation();
    const [avatar, setAvatar] = useState(no_avatar);
    const { setVisible, bindings } = useModal();
    const { register, formState: { errors }, handleSubmit } = useForm<User>();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

    }, [])

    const createUser = (data: User) => {
        setSpinner(true)
        _userServices.createUser(data)
            .subscribe((resp) => {
                setSpinner(false)
                console.log(resp);
                setLocation('/home');
                Toasty({
                    type: "success",
                    message: `User created successfully`,
                });
            })
    }

    const onSubmit: SubmitHandler<User> = (data) => {
        data.avatar = avatar;
        console.log(data);
        if (data.avatar === no_avatar) {
            Toasty({
                type: "warning",
                message: `Plase select an Avatar`,
            });
            setVisible(true);
        } else {
            //PROCEED TO CREATE THE USER
            createUser(data);
        }
    }


    return (
        <>
            <div style={{ width: '100%', height: 'auto', marginTop: '80px' }}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="card-glass animate__animated animate__backInUp">
                        <Row className="avatar-container">
                            <Image
                                css={{ maxWidth: '400px' }}
                                className="avatar-select"
                                src={avatar}
                                alt="avatar img"
                                objectFit='cover'
                            />
                            <div className="avatar-hiden">
                                <Button flat onClick={() => setVisible(true)}>
                                    Choose an Avatar
                                </Button>
                            </div>
                        </Row>
                        <Row>
                            <Text>Please provide the user information</Text>
                        </Row>
                        <Row css={{ gap: 15 }}>
                            <Col>
                                <Input css={{ width: '100%' }} labelPlaceholder="First Name"
                                    {...register("first_name", { required: true })}
                                />
                                {errors.first_name &&
                                    <Text color="error">
                                        First name is required
                                    </Text>
                                }
                            </Col>
                            <Col>
                                <Input css={{ width: '100%' }} labelPlaceholder="Second Name"
                                    {...register("second_name", { required: true })}
                                />
                                {errors.second_name &&
                                    <Text color="error">
                                        Second name is required
                                    </Text>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input css={{ width: '100%' }} labelPlaceholder="E-mail"
                                    {...register("email", {
                                        required: 'E-mail name is required', pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: 'Must to be a valid e-mail'
                                        }
                                    })}
                                />
                                {errors.email?.message &&
                                    <Text color="error">
                                        {errors.email?.message}
                                    </Text>
                                }
                            </Col>
                        </Row>
                        <Row className="center">
                            <Button flat color="gradient" type="submit">
                                {!spinner ?
                                    'CREATE'
                                    :
                                    <Loading type="points" color="currentColor" size="sm" />
                                }
                            </Button>
                        </Row>
                    </div>
                </form>
            </div>
            <AvatarSelect setAvatar={setAvatar} setVisible={setVisible} bindings={bindings} />
        </>
    )
}
