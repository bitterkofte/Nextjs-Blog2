import Link from "next/link";
import styled from "styled-components";

const StyledChain = styled.div`
  color: rgb(116, 116, 116);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
/* 
  &:link {
    text-decoration: none;
    rgb(255, 0, 0);
    box-sizing: border-box;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 3px solid;
  } */
`;

export default ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledChain>{children}</StyledChain>
    </Link>
  );
};