import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface IsActiveProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled(RectButton)<IsActiveProps>`
  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme: { colors }, isActive }) =>
    isActive ? colors.shape : colors.background};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(8)}px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Separator = styled.View`
  height: 1.5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`;
