import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1250px;
  min-height: 85px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdminHeadingSection = styled.div``;

export const AdminHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const MenuSection = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const LogoSection = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
  }
`;

export const RegisterButton = styled.button`
  width: 130px;
  min-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background: black;
  outline: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;

export const LoginButton = styled(RegisterButton)`
  width: max-content;
  background: transparent;
  border: none;
  border-radius: 0;
  color: black;
`;

export const NavigationSection = styled.div`
  display: flex;

  gap: 35px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: hsl(220, 9%, 35%);
  }
`;

export const LinkSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
