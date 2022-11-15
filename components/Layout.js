import Header from "./Header";
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import React from 'react';
import { useState } from 'react';
import Clock from 'react-live-clock';

const BodyDiv = styled.div`
  /* font-family: 'Josefin Sans', sans-serif; */
  font-family: 'Kanit', sans-serif;
  /* font-family: 'Josefin Sans', sans-serif; */
  margin: 0;
  padding: 0;
`;

const Footer = styled.footer`
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const FooterInner = styled.div`
  /* max-width: 800px; */
  display: flex;
  justify-content: center;
  gap: 50px;
  /* align-content: space-between; */
  align-items: center;
  
  margin: auto;
  padding: 20px;
  a{
    text-decoration: none;
    cursor: default;
  }
  a:link{
    color: rgb(128, 128, 128);
  }
  a:visited {
    color: rgb(128, 128, 128);
  }
  a:hover {
    color: rgb(0, 122, 122);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ContentInner = styled.div`
  padding: 20px;
  text-align: justify;
  margin-bottom: 90px;
`;

const H1 = styled.h1`
  padding: 20px 20px 0 20px;
  margin-top: 90px;
`;

export default ({ title, children }) => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  let time = new Date().toLocaleTimeString();
  
  // console.log("ZAMAN",time);
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);  }
  setInterval(updateTime, 1000);

  return(
  <BodyDiv>
    <Helmet>
        <title>Modified</title>
        <meta name="description" content="App Description" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Kanit&display=swap" rel="stylesheet"></link>
      </Helmet>
    <Header />
    <Content>
      <H1>{title}</H1>
      <ContentInner>{children}</ContentInner>
    </Content>
    <Footer>
      <FooterInner>
        <a id="first-child"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <span>© 2022 Powered by vercel - @bitterkofte</span>
        </a>

        <span id="second-child">
          {date}
        </span>

        <span id="third-child">
          {/* <Clock format={'hh:mm:ssa'}
          ticking={true} /> */}
          {/* 14:26:13 */}
          {currentTime}
        </span>
      </FooterInner>
    </Footer>
  </BodyDiv>
)};