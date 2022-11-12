import Header from "./Header";
import styled from "styled-components";
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Clock from 'react-live-clock';



const BodyDiv = styled.div`
  /* font-family: 'Josefin Sans', sans-serif; */
  font-family: 'Kanit', sans-serif;
  /* font-family: 'Josefin Sans', sans-serif; */
  margin: 0;
  padding: 0;
`;

const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;  
  bottom: 0;
  width: 100vw;
`;

const FooterInner = styled.div`
  /* max-width: 800px; */
  display: flex;
  /* justify-content: space-between; */
  align-content: space-between;
  
  margin: auto;
  padding: 20px;
  a{
    text-decoration: none;
    cursor: default;
  }
  a:link{
    color: rgb(128, 128, 128);
  }
  a:hover {
    color: rgb(0, 122, 122);
  }

  #first-child{
    /* flex: auto; */
  }
  #second-child{
    /* flex-grow: 4; */
  }
  #third-child{
    /* flex: auto; */
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const ContentInner = styled.div`
  padding: 20px;
  text-align: justify;
`;

const H1 = styled.h1`
  padding: 20px;
`;



// document.getElementById("date").innerHTML = new Date();
const current = new Date();
// const time = `${current.toLocaleTimeString()}`;
// const [time, setTime] = useState(0);
// useEffect(() => {
//   const now = Date.now()
//   setTime(now.getTime());
// }, []);

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


export default ({ title, children }) => (
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
          {/* <Clock
          format={'h:mm:ssa'}
          // style={{fontSize: '1.5em'}}
          ticking={true} /> */}
          14:26:13
        </span>
      </FooterInner>
    </Footer>
  </BodyDiv>
);