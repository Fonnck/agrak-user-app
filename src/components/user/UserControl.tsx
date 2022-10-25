import { useEffect, useState } from 'react';
import { Button, Col, Image, Input, Loading, Row, Text, useModal } from "@nextui-org/react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { HiOutlineTrash } from "react-icons/hi";
import { useLocation } from 'wouter';

import { ToastAlert } from '../generic-components/Toaster'
import { AvatarSelect } from '../generic-components';
import { User } from "../../interfaces";
import no_avatar from '../../assets/img/no_avatar.png';
import { UserServices } from '../../api/services';
import { ConfirmAction } from '../ui/ConfirmAction';

const _userServices = new UserServices();

export const UserControl = () => {

    const { Toasty } = ToastAlert();
    const [idUser, setidUser] = useState('-1');
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [location, setLocation] = useLocation();
    const [avatar, setAvatar] = useState(no_avatar);
    const [showConfirm, setShowConfirm] = useState(false);
    const { setVisible, bindings } = useModal();
    const { register, formState: { errors }, handleSubmit, setValue, getValues } = useForm<User>();

    useEffect(() => {
        if (location.includes('update')) {
            setUpdate(true);
            let arrPath: string[] = location.split('/');
            console.log(arrPath[2]);
            setidUser(arrPath[2]);
            loadUser(arrPath[2]);
        }
    }, [])

    const loadUser = (id: string) => {
        _userServices.getUser(id)
            .subscribe((resp) => {
                console.log(resp);
                setAvatar(resp.avatar);
                setValue('id', id);
                setValue('first_name', resp.first_name);
                setValue('second_name', resp.second_name);
                setValue('email', resp.email);
            })
    }


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

    const updateUser = (data: User) => {
        setSpinner(true)
        _userServices.updateUser(data)
            .subscribe((resp) => {
                setSpinner(false)
                console.log(resp);
                setLocation('/home');
                Toasty({
                    type: "success",
                    message: `User updated successfully`,
                });
            })
    }

    const deleteUser = () => {
        setSpinner(true)
        _userServices.deleteUser(idUser)
            .subscribe((resp) => {
                setSpinner(false)
                console.log(resp);
                setLocation('/home');
                Toasty({
                    type: "success",
                    message: `User deleted successfully`,
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
            update ? updateUser(data) : createUser(data);
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
                                <Input css={{ width: '100%' }}
                                    labelPlaceholder="First Name"
                                    value={getValues('first_name')}
                                    {...register("first_name", { required: true })}
                                />
                                {errors.first_name &&
                                    <Text color="error">
                                        First name is required
                                    </Text>
                                }
                            </Col>
                            <Col>
                                <Input css={{ width: '100%' }}
                                    labelPlaceholder="Second Name"
                                    value={getValues('second_name')}
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
                                <Input css={{ width: '100%' }}
                                    labelPlaceholder="E-mail"
                                    value={getValues('email')}
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
                            {update &&
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "between", gap: '1rem' }}>
                                    <Button shadow color="error" icon={<HiOutlineTrash />} onPress={() => setShowConfirm(true)}>
                                        {!spinner ?
                                            'DELETE'
                                            :
                                            <Loading type="points" color="currentColor" size="sm" />
                                        }
                                    </Button>
                                    <Button shadow color="gradient" type="submit">
                                        {!spinner ?
                                            'UPDATE'
                                            :
                                            <Loading type="points" color="currentColor" size="sm" />
                                        }
                                    </Button>
                                </div>}
                            {!update &&
                                <Button shadow color="gradient" type="submit">
                                    {!spinner ?
                                        'CREATE'
                                        :
                                        <Loading type="points" color="currentColor" size="sm" />
                                    }
                                </Button>}
                        </Row>
                    </div>
                </form>
            </div>
            <AvatarSelect setAvatar={setAvatar} setVisible={setVisible} bindings={bindings} />
            { showConfirm && <ConfirmAction text='¿Are you sure to proceed?' action={deleteUser} show={showConfirm} setShow={setShowConfirm}/>}
        </>
    )
}
