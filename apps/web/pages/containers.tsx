import { useEffect } from "react";
import { Containers } from "../modules";
import { fetchUserApi } from "@services/api";
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from "@utils/session";

export default function Container(props:an) {

  useEffect(() => {
    // useEffect 钩子只会在客户端中执行，因此我们可以在其中使用 window 对象来获取 URL 参数的值
    // 从查询参数中获取访问令牌
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token") || "";
    if (!token) {
      console.log('token不存在')
      return;
    }

    console.log('token:',token)

    /*
    fetchUserApi(token)
      .then((response) => response.json())
      .then((data) => {
        // 设置用户状态
        // setUser(data);
        console.log("data", data);
        if(data.code){
          // 将访问令牌存储在浏览器的 cookie 或者 localStorage 中
          // localStorage.setItem('token', token);
          sessionStorage.setItem('token', token);
          const { email,id,avatar,nickname } = data.data
          const session = {
            user: { nickname }
          };

          // withIronSession(async (req, res) => {
          //   req.session.set("user", session.user);
          //   await req.session.save();
          // })(user.req, user.res);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    */
  });

  console.log('containers-render',props)

  return (
    <>
      <Containers />
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(async ({ req, query }) => {
  const { token } = query;
  // console.log('containers->getServerSideProps',req)
  console.log('containers->getServerSideProps',token)
  if(token){
    const res = await fetchUserApi(token as any)
    const data = await res.json();
    if(data.code){
      // 将访问令牌存储在浏览器的 cookie 或者 localStorage 中
      // localStorage.setItem('token', token);
      // sessionStorage.setItem('token', token);
      const { email,id,avatar,nickname } = data.data
      console.log('containers->getServerSideProps 22:',data.data)
    }
  }
  const { payload } = req.session

  if (payload) {
    const { userId = '' } = query
    return {
      props: {
        userId,
        payload,
        locale,
      },
    }
  }

  return {
    props:{
      test:123
    }
  }

  // return {
  //   redirect: {
  //     destination: '/',
  //     permanent: false,
  //   },
  // }
}, sessionOptions)

/*
export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, login: '', avatarUrl: '' } as User,
      },
    }
  }

  return {
    props: { user: req.session.user },
  }
},
sessionOptions)
*/