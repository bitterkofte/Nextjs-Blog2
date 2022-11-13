import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';


const GlobalStyle = createGlobalStyle`
  body {
    color: rgb(223, 223, 223);
    margin: 0;
    padding: 0;
    background: rgb(0, 82, 82);
    a{text-decoration: none;}
    h1,h2{margin:0px;}
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  );
}