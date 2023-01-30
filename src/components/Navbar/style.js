import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  background-color: var(--backgroundPrimary);
`;
const Container = styled.div``;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InnerWrapper = styled.div`
  max-width: 1376px;
  width: 100%;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  column-gap: 64px;
  list-style: none;
  .active {
    color: purple;
  }
`;
const NavItems = styled(NavLink)`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const NavRight = styled.div``;
const LogoImg = styled(Logo)`
  & path {
    fill: #fff;
  }
  cursor: pointer;
`;
const H2 = styled.h2`
  margin-left: 14px;
  color: #fff;
`;

export {
  Container,
  Header,
  Nav,
  LogoImg,
  NavLeft,
  NavRight,
  NavList,
  InnerWrapper,
  H2,
  NavItems,
};
