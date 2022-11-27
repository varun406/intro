import React from "react";
import {
  Bold,
  CompanyImage,
  CompanySection,
  Container,
  Desc,
  DetailsWrap,
  GetStartedButton,
  Heading,
  Image,
  InputField,
  InputSection,
  LeftSection,
  RightSection,
  Wrapper,
} from "./Intro.styles";

const Intro = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </LeftSection>
        <RightSection>
          <DetailsWrap>
            <Heading>
              <Bold>Smart Banking</Bold> for the financial<Bold>freedom.</Bold>{" "}
            </Heading>
            <Desc>
              We will calculate the credit limit individually for you without
              interviews with credit brokers.
            </Desc>
            <InputSection>
              <InputField type="text" placeholder="Enter you email" />
              <GetStartedButton>Get Started</GetStartedButton>
            </InputSection>
          </DetailsWrap>
          <CompanySection>
            <CompanyImage src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" />
            <CompanyImage src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
            <CompanyImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
          </CompanySection>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Intro;
