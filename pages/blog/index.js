import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import md from "markdown-it";

import Layout from "../../components/Layout";
import Chain from "../../components/Chain";
import styled from "styled-components";

// const blogContents = [
//   {
//     href: "yazi1",
//     title: "Yazı 1",
//     text: "içerik falan filan feşmekan 1"
//   },
//   {
//     href: "yazi2",
//     title: "Yazı 2",
//     text: "içerik falan filan feşmekan 2"
//   },
// ];

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
/* border: 3px solid red; */
padding: 15px;
display: grid;
gap: 50px;
box-shadow: 10px 10px rgb(0, 69, 69);
`
const Herbir = styled.article`
padding: 10px;
background-color: rgb(147, 73, 0);
&:hover{padding-left: 15px;
box-shadow:
  rgba(0,0,0,0.4)
  10px 10px
  inset}

/* box-shadow: 6px 6px #bd93f9; */
`

const AHref = styled.a`
font-weight: 600;
display: block;
width: fit-content;
color: rgb(255, 255, 255);
&:hover{color: rgb(0, 160, 160);}
`
const Info = styled.span`
  font-style: italic;
`
const H0 = styled(Link)`
    display: inline;
    width: fit-content;
    &:visited{color: white;}
    &:hover{color: rgb(0, 160, 160);}
    h1{color: rgb(236,236,236);}
`;

export default ({posts}) => (
  <Layout title="Blog">
    <BlogWrapper>
      {/* {blogContents.map((item, index) => 
      <BlogDiv key={index}>
        <H2>{item.title}</H2>
        <par>{item.text}</par>
        <AHref href={`/blog/${item.href}`}>Devamı...</AHref>
      </BlogDiv>
      )} */}
      {posts.map((post) => {
          //extract slug and frontmatter
          const { slug, frontmatter, content } = post;
          //extract frontmatter properties
          const { title, author, category, date, bannerImage, tags } =
            frontmatter;

          let intro = content.slice(0,150).concat(" ...");
          // intro.

          //JSX for individual blog listing
          return (
            <Herbir key={title}>
              <H0 href={`/blog/${slug}`}>
                <h1>{title}</h1>
              </H0>
              <Info>{author} • {date}</Info>
              <div dangerouslySetInnerHTML={{ __html: md().render(intro) }} />
              <AHref href={`/blog/${slug}`}>Devamı...</AHref>
            </Herbir>
          );
        })}
    </BlogWrapper>
  </Layout>
);

export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}