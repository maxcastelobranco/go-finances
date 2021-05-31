import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";

import { TransactionCardProps } from "./components/TransactionCard";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${RFPercentage(4)}px;
`;

export const UserInfoWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(12)}px;
`;

export const UserGreeting = styled.View`
  margin-left: ${RFValue(16)}px;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;

export const BalanceCardList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: RFValue(24),
  },
})`
  position: absolute;
  width: 100%;
  margin-top: ${RFPercentage(20)}px;
`;

export const TransactionListContainer = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFPercentage(12)}px;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<TransactionCardProps>
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const TransactionListTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(16)}px;
`;
