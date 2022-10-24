import { FC, useEffect, useState } from 'react'
import { Avatar } from '@nextui-org/react';

import { AvatarItem } from '../../interfaces';
interface Props {
    choose: Function
}

export const AvatarList: FC<Props> = ({choose}) => {

    const [avatarList, setAvatarList] = useState<AvatarItem[]>([]);

    useEffect(() => {
        generateAvatarList();
    }, [])

    /**
     * Generates a list of hundred avatars to choose
     */
    const generateAvatarList = () => {
        let list: AvatarItem[] = [];
        let i = 0;
        while (i <= 100) {

            list.push({
                index: i,
                src: `https://api.multiavatar.com/${i}.png`
            })

            i++;
        }
        setAvatarList(list);
    }

    return (
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
        </div>
    )
}
