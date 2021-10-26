import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #00bfd8;
  text-align: center;
  font-family: "Raleway";
  font-weight: bold;
  color: white;
  border-bottom: #ff6363 20px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titling = styled.div`
  padding: 120px 0px;
`

const Title = styled.div`
  font-size: 60px;
`;

const Subtitle = styled.div`
  font-size: 30px;
`;

const NavBar = styled.div`
  font-size: 20px;
  display: flex;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: white;
  font-size: 20px;
  padding: 0px 30px;
`

const Header = () => (
  <Wrapper>
    <Titling>
      <Title>Hack the Change 2021</Title>
      <Subtitle>Code the Change YYC</Subtitle>
    </Titling>
    <NavBar>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/unsd'>UNSD API</NavLink>
    </NavBar>
  </Wrapper>
);

export default Header;
