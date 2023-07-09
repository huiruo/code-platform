import App from "next/app";
import NiceModal from '@common/nice-modal'
import 'antd/dist/reset.css';
import '../styles/index.scss'
import '../styles/header.scss'

function MyApp({ Component, pageProps }) {

    return (
        <NiceModal.Provider>
            <App Component={Component} pageProps={pageProps} />
        </NiceModal.Provider>
    );
}

export default MyApp;