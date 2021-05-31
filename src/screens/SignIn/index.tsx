import React from "react";

import GoFinances from "../../components/Svg/GoFinances";
import Google from "../../components/Svg/Google";
import Apple from "../../components/Svg/Apple";

import {
  TopContainer,
  BottomContainer,
  Title,
  Description,
  SignInButton,
  SignInButtonText,
  SignInButtonTextContainer,
  IconContainer,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <TopContainer>
        <GoFinances />
        <Title>Get a hold of your finances in the simplest of ways</Title>
        <Description>Sign in one of these two ways below</Description>
      </TopContainer>
      <BottomContainer>
        <SignInButton
          style={{
            marginTop: "-10%",
          }}
        >
          <IconContainer>
            <Google />
          </IconContainer>
          <SignInButtonTextContainer>
            <SignInButtonText>Sign in with Google</SignInButtonText>
          </SignInButtonTextContainer>
        </SignInButton>
        <SignInButton>
          <IconContainer>
            <Apple />
          </IconContainer>
          <SignInButtonTextContainer>
            <SignInButtonText>Sign in with Apple</SignInButtonText>
          </SignInButtonTextContainer>
        </SignInButton>
      </BottomContainer>
    </>
  );
};

export default SignIn;
