import { useEffect, useState } from "react";
import { Navbar, Button, Text, Avatar } from "@nextui-org/react";
import { useLocation, useRoute } from "wouter";
import { BiHome } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

export const Nav = () => {

    const [active, setActive] = useState(false);
    const [avatar, setAvatar] = useState('https://api.multiavatar.com/agrak.png');
    const [location, setLocation] = useLocation();
    const [match, params] = useRoute("/home");

    useEffect(() => {
        console.log(match);
        setAvatar(generateAvatar());
    }, [active])

    /**
     * Generates a radom avatar from https://api.multiavatar.com/
     */
    const generateAvatar = (): string => {

        return `https://api.multiavatar.com/${Math.floor(Math.random() * 5000)}.png`;
    }

    return (
        <div className="nav animate__animated animate__fadeIn">
            <Navbar isBordered variant="floating">
                <Navbar.Brand>
                    <Avatar
                        css={{ marginRight: 15, cursor: 'pointer' }}
                        squared
                        src={avatar}
                        onClick={() => setLocation('/home')}
                    />
                    <Text b color="inherit" hideIn="xs" css={{ cursor: 'pointer' }} onClick={() => setLocation('/home')}>
                        AGRAK USERAPP
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="highlight-rounded">
                    {match &&
                        <Button
                            auto
                            color="warning"
                            shadow={active}
                            bordered={!active}
                            css={{ marginRight: 10 }}
                            onClick={() => setActive(!active)}
                        >
                            View List
                        </Button>
                    }
                    {match &&
                        <Button
                            auto
                            color="warning"
                            shadow={!active}
                            bordered={active}
                            onClick={() => setActive(!active)}
                        >
                            View Cards
                        </Button>}
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        {match ?
                            <Button
                                auto
                                flat
                                color="success"
                                icon={<AiOutlineUserAdd />}
                                onClick={() => setLocation('/user-control')}>
                                Create
                            </Button>
                            :
                            <Button
                                auto
                                color="warning"
                                flat
                                icon={<BiHome />}
                                onClick={() => setLocation('/home')}
                            >
                                Go Home
                            </Button>
                        }
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}
