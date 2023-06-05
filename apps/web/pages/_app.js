// import App from 'next/app'
import 'antd/dist/reset.css';
import '../styles/index.scss'
import '../styles/header.scss'
//
// const MyApp = () =>{
//    return(
//        <App />
//    )
// }
//
// export default MyApp

import App from "next/app";
import { MyProvider } from "../path/to/provider";

function MyApp({ Component, pageProps }) {
    return (
        <MyProvider>
            <App Component={Component} pageProps={pageProps} />
        </MyProvider>
    );
}

export default MyApp;