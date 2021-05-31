import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${RFValue(8)}px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: ${RFValue(8)}px;
  text-transform: capitalize;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${RFValue(24)}px;
`;
