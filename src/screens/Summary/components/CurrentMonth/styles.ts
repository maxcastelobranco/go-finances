import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
`;

export const ArrowContainer = styled(RectButton)`
  padding: ${RFValue(8)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${RFValue(24)}px;
`;

export const CurrentMonthText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.textDark};
`;
