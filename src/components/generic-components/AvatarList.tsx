import { FC, useEffect, useState } from 'react'
import { Avatar, Loading } from '@nextui-org/react';

import { AvatarItem } from '../../interfaces';
interface Props {
    choose: Function
}

export const AvatarList: FC<Props> = ({ choose }) => {

    const [avatarList, setAvatarList] = useState<AvatarItem[]>([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        generateAvatarList();
    }, [])

    /**
     * Generates a list of hundred avatars to choose
     */
    const generateAvatarList = () => {
        let list: AvatarItem[] = [];
        let i = 0;
        /* setSpinner(true); */
        while (i <= 100) {

            list.push({
                index: i,
                src: `https://api.multiavatar.com/${i}.png`
            })

            i++;
        }
        /* setSpinner(true); */
        setAvatarList(list);
    }

    return (
        <>
            {avatarList.length === 0 ?
                <Loading type="points" size='xl' color="warning" />
                :
                <div className="center grid-wrap">
                    {
                        avatarList.map((avatar: AvatarItem, index) =>
                            <div key={index}>
                                <Avatar
                                    className="zoom"
                                    css={{ cursor: 'pointer' }}
                                    squared
                                    size={'xl'}
                                    src={avatar.src}
                                    onClick={() => {
                                        console.log(avatar.index, avatar.src);
                                        choose(avatar.src);
                                    }}
                                />
                            </div>
                        )
                    }
                </div>}
        </>
    )
}
