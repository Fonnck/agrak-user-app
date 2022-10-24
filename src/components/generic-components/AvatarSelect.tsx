import { FC } from "react";
import { Button, Modal, Text } from "@nextui-org/react";
import { AvatarList } from "./AvatarList";


interface Props {
    setAvatar: Function;
    setVisible: Function;
    bindings: any; //I could not find the exact type
}

export const AvatarSelect: FC<Props> = ({ setVisible, bindings, setAvatar }) => {

    /**
     * Set state that manipulates avatar img source, and close the modal.
     * @param src Avatar source selected
     */
    const choose = (src: string) => {
        setAvatar(src);
        setVisible(false);
    }

    return (
        <Modal
            scroll
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Choose an Avatar for You
                </Text>
            </Modal.Header>
            <Modal.Body>
                <AvatarList choose={choose}/>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
