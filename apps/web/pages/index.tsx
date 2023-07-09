import NiceModal from '@common/nice-modal'
import { Button } from "antd";
import { ModalSign } from "@components/modalSign/ModalSign";
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session';

export default function Index() {
    const onLogin = (e) => {
        console.log('onLogin')
        e.preventDefault()
        NiceModal.show(ModalSign)
    }

    const onRegister = () => {
        console.log('onRegister')
    }

    return (
        <div>
            <Button onClick={(e) => onLogin(e)}>登录-test</Button>
            <Button onClick={onRegister}>注册</Button>
        </div>
    )
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
  const { payload } = req.session

  if (payload) {
    return {
        redirect: {
            destination: '/containers',
            permanent: false,
        },
    }
  }

  return {
    props: { }
  }
}, sessionOptions)