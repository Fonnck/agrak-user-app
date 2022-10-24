import { FC } from "react";
import { Button, Modal, Text } from "@nextui-org/react";
import { AvatarList } from "./AvatarList";


interface Props {
    setVisible: Function;
    bindings: any; //I could not find the exact type
}

export const AvatarSelect: FC<Props> = ({ setVisible, bindings }) => {

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
                    Choose an Avatar for you
                </Text>
            </Modal.Header>
            <Modal.Body>
                <AvatarList />
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onClick={() => setVisible(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
