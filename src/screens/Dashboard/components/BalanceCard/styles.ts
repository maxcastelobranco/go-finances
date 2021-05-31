import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  title: "Income" | "Outcome" | "Total";
}

export const Container = styled.View<Props>`
  background-color: ${({ theme: { colors }, title }) =>
    title === "Total" ? colors.secondary : colors.shape};
  width: ${RFValue(280)}px;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme: { colors }, title }) =>
    title === "Total" ? colors.shape : colors.textDark};
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(40)}px;
  color: ${({ title, theme: { colors } }) =>
    title === "Income"
      ? colors.success
      : title === "Outcome"
      ? colors.warning
      : colors.shape};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme: { colors }, title }) =>
    title === "Total" ? colors.shape : colors.textDark};
  margin-top: ${RFValue(38)}px;
`;

export const LastTransaction = styled.Text<{
  title: "Income" | "Outcome" | "Total";
}>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme: { colors }, title }) =>
    title === "Total" ? colors.shape : colors.text};
`;
