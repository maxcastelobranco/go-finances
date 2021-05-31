import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

interface TypeProps {
  type: "income" | "outcome";
}

interface IsActiveProps {
  isActive: boolean;
}

export const Container = styled(Pressable)<IsActiveProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  background-color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.shape : colors.background};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
  color: ${({ theme: { colors }, type }) =>
    type === "income" ? colors.success : colors.warning};
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme: { colors }, type }) =>
    type === "income" ? colors.success : colors.warning};
`;
