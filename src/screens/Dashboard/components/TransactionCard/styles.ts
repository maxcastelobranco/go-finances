import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  type: "income" | "outcome";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(4)}px;
`;

export const Amount = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.success : theme.colors.warning};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(20)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const TransactionDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;
