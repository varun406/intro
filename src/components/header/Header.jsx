import React from "react";
import {
  Container,
  LinkSection,
  LoginButton,
  Logo,
  LogoSection,
  MenuSection,
  NavigationSection,
  RegisterButton,
  UserSection,
  Wrapper,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <Logo src="./assets/logo.png" alt="logo" />
        </LogoSection>
        <NavigationSection>
          <LinkSection>Home</LinkSection> /<LinkSection>Products</LinkSection> /
          <LinkSection>Services</LinkSection> /<LinkSection>About</LinkSection>{" "}
          /<LinkSection>Contact us</LinkSection>
        </NavigationSection>
        <UserSection>
          <LoginButton>Log in</LoginButton>

          <RegisterButton>Sign up</RegisterButton>
        </UserSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
