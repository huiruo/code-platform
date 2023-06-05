import NiceModal from '@common/nice-modal'
import {Button} from "antd";
import {ModalSign} from "@components/modalSign/ModalSign";

export default function Index() {
    const onLogin = (e) =>{
       console.log('onLogin')
        e.preventDefault()
        // mutateSignStatus('register')
        NiceModal.show(ModalSign)
    }

    const onRegister = () =>{
        console.log('onRegister')
    }

    return (
        <div>
            <Button onClick={(e)=>onLogin(e)}>登录</Button>
            <Button onClick={onRegister}>注册</Button>
        </div>
    )
}
