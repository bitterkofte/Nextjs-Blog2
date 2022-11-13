import Layout from "../../components/Layout";
import Chain from "../../components/Chain";
import styled from "styled-components";

const blogContents = [
  {
    href: "yazi1",
    title: "Yazı 1",
    text: "içerik falan filan feşmekan 1"
  },
  {
    href: "yazi2",
    title: "Yazı 2",
    text: "içerik falan filan feşmekan 2"
  },
];

const BlogDiv = styled.div`
background-color: rgb(125, 63, 0);
padding: 20px;
/* margin-bottom: 10px; */
`
const H2 = styled.h2`
margin-bottom: 10px;
`
const BlogWrapper = styled.div`
background-color: rgba(90, 90, 90, 1);
padding: 20px;
display: grid;
gap: 10px;
`

const AHref = styled.a`
font-weight: 600;
display: block;
width: fit-content;
color: rgb(255, 255, 255);
&:hover{color: rgb(0, 160, 160);}
`

export default () => (
  <Layout title="Blog">
    yazılarrrr
    <BlogWrapper>
      {blogContents.map((item, index) => 
      <BlogDiv key={index}>
        <H2>{item.title}</H2>
        <par>{item.text}</par>
        <AHref href={`/blog/${item.href}`}>Devamı...</AHref>
      </BlogDiv>
      )}
    </BlogWrapper>
  </Layout>
);