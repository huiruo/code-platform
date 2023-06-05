import NiceModal, { useModal } from '@common/nice-modal'
import {Modal} from "antd";
import {useSignStatus} from "@components/modalSign/hooks";

export const ModalSign = NiceModal.create(({}) => {
    const { status } = useSignStatus()
    const { visible, hide } = useModal()
    return (
        <Modal open={visible} onCancel={hide}>
                <div>
                    test
                </div>
        </Modal>
    )
})