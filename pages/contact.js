import Layout from "../components/Layout";
import styled from "styled-components";

const AHref = styled.a`
font-weight: 400;
display: block;
width: fit-content;
color: rgb(255, 255, 255);
&:hover{color: rgb(0, 160, 160);}
`

export default () => (
  <Layout title="İletişim">
    <AHref href="mailto: hasantalhahtc@gmail.com">✉  hasantalhahtc@gmail.com</AHref>
  </Layout>
);