import { FC, useEffect } from 'react';
import { Button, Modal, Text, useModal } from "@nextui-org/react";

interface Props {
    text: string;
    action: Function;
    show: boolean;
    setShow: Function;
}

export const ConfirmAction: FC<Props> = ({ text, action, show, setShow }) => {

    const { setVisible, bindings } = useModal();

    useEffect(() => {
        setVisible(true);
    }, [show])


    return (
        <Modal
            scroll
            blur
            /* width="600px" */
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    {text}
                </Text>
            </Modal.Header>
            <Modal.Footer>
                <Button auto flat color="error" onPress={() => {setVisible(false); setShow(false);}}>
                    Cancel
                </Button>
                <Button auto flat color="warning" onPress={() => { action(); setShow(false); setVisible(false) }}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
