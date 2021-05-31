import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export const TopContainer = styled.View`
  flex: 0.8;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-evenly;
  padding-horizontal: ${RFValue(48)}px;
`;

export const BottomContainer = styled.View`
  flex: 0.2;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-horizontal: ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  padding-horizontal: ${RFValue(48)}px;
`;

export const SignInButton = styled(RectButton)`
  flex-direction: row;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${RFValue(16)}px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

export const SignInButtonTextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
  border-left-width: ${StyleSheet.hairlineWidth}px;
  border-left-color: ${({ theme }) => theme.colors.text};
`;

export const SignInButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
