import React from "react";
import { Wrapper, Main, Footer } from "./style";
import { InnerWrapper } from "../Navbar/style";
const Home = () => {
  return (
    <Wrapper>
      <Main>
        <InnerWrapper>Home</InnerWrapper>
      </Main>
      <Footer>
        <InnerWrapper></InnerWrapper>
      </Footer>
    </Wrapper>
  );
};

export default Home;
