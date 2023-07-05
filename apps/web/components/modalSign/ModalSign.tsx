import NiceModal, { useModal } from '@common/nice-modal'
import { Button, Modal } from "antd";
import { useSignStatus } from "@components/modalSign/hooks";

export const ModalSign = NiceModal.create(({ }) => {
    const { status } = useSignStatus()
    const { visible, hide } = useModal()
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENTiD
    const HOST = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_HOST : process.env.NEXT_PUBLIC_PROD_HOST
    const googleRedirectUri = `${HOST}/user/google/auth/handler`
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${googleRedirectUri}&scope=profile email&client_id=${googleClientId}`

    console.log('process.env.NODE_ENV:', process.env.NODE_ENV, { HOST, googleAuthUrl })

    const onGoogleLogin = async () => {
        console.log('onGoogleLogin',)
    }

    return (
        <Modal open={visible} onCancel={hide}>
            <div>
                <a href={googleAuthUrl}>登录</a>
                <Button onClick={onGoogleLogin}>登录</Button>
            </div>
        </Modal>
    )
})