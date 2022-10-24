import { Avatar, Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react'
import { AvatarItem } from '../../interfaces';

export const AvatarList = () => {

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
                    <Tooltip content="Choose Me!" color="success">
                        <div key={index}>
                            <Avatar
                                css={{ cursor: 'pointer' }}
                                squared
                                size={'xl'}
                                src={avatar.src} />
                        </div>
                    </Tooltip>
                )
            }
        </div>
    )
}
