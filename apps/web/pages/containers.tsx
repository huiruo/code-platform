import { useContext, useEffect } from "react";
import { Containers } from "../modules";
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from "@common/session";
// import { setCookie, getCookie } from 'cookies-next'
import { LoginSuccessPayload } from "types";

interface Props {
  payload: LoginSuccessPayload
  token: string
}

export default function Container({ payload } : Props) {
  useEffect(() => {
    // if(payload.token && getCookie('token') !== payload.token){
    //   setCookie('token',payload.token as string)
    //   console.log('token重置')
    // }else{
    //   console.log('token是否存在',getCookie('token'))
    // }

    // console.log('containers-page-useEffect')
  },[]);

  console.log('containers-render',payload)

  return (
    <>
      <Containers payload={ payload } />
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
  const { payload } = req.session

  console.log('containers->getServerSideProps-1',{ payload })

  if (payload) {
    console.log('getServerSideProps-setToken',payload.token)

    return {
      props: { payload },
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}, sessionOptions)

