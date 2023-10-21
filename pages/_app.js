// import global styles,Note: This is the only place where global css can be imported
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  