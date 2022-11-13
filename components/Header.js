import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeaderInner = styled.div`
  margin: 0 0 15px 0;
  color: rgb(0, 82, 82);
  /* max-width: 800px; */
  padding: 30px;
  display: flex;
  gap: 20px;
  /* border: 4px solid red; */
  justify-content: space-between;
`;



export default () => (
  <HeaderDiv>
    <HeaderInner>
      <Button href="/">Ana Sayfa</Button>
      <Button href="/blog">Blog</Button>
      <Button href="/about">Hakkımda</Button>
      <Button href="/contact">İletişim</Button>
    </HeaderInner>
  </HeaderDiv>
);