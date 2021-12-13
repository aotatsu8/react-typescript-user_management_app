import { memo, VFC } from "react"
import { Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack,　FormControl, FormLabel } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props
    return(
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom" >
                <ModalOverlay />
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value="aaa" isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value="aaa" isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                                <Input value="aaa" isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                                <Input value="aaa" isReadOnly />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
})