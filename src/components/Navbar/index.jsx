import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import {
  Container,
  H2,
  Header,
  InnerWrapper,
  LogoImg,
  Nav,
  NavItems,
  NavLeft,
  NavList,
  NavRight,
} from "./style";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <InnerWrapper>
          <Nav>
            <NavLeft>
              <LogoImg onClick={() => navigate("/home")}/>
              <H2>Houzing</H2>
            </NavLeft>
            <NavList>
              {navbar.map(({ title, path }) => {
                return (
                  <NavItems
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={path}
                  >
                    {title}
                  </NavItems>
                );
              })}
            </NavList>
            <NavRight></NavRight>
          </Nav>
        </InnerWrapper>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Navbar;
