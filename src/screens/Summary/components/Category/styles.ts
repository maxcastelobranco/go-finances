import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<{ color: string }>`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(8)}px;
  margin: ${RFValue(8)}px ${RFValue(16)}px;
  border-left-width: 4px;
  border-left-color: ${(props) => props.color};
  border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Amount = styled.Text<{ isNegative: boolean }>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isNegative }) =>
    isNegative ? theme.colors.warning : theme.colors.success};
`;
