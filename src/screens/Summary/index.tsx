import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { PieChart } from "react-native-chart-kit";
import { useTheme } from "styled-components";
import { isSameMonth } from "date-fns";

import { categories, CategoryNames } from "../../utils/categories";
import { TRANSACTIONS_KEY } from "../../global/constants";
import { StoredTransaction } from "../Dashboard";

import Categories from "./components/Categories";
import { Container, Header, LoadingContainer, Title } from "./styles";
import CurrentMonth from "./components/CurrentMonth";

export type CategoryMap = { [key in CategoryNames]: number };

const { width, height } = Dimensions.get("window");

const Summary: React.FC = () => {
  const { colors, fonts } = useTheme();
  const [storedData, setStoredData] = useState<StoredTransaction[]>();
  const [currentDate, setCurrentDate] = useState(new Date());

  const loadTransactions = () => {
    AsyncStorage.getItem(TRANSACTIONS_KEY).then((stringifiedTransactions) => {
      if (stringifiedTransactions !== null) {
        const parsedTransactions: StoredTransaction[] = JSON.parse(
          stringifiedTransactions
        );

        setStoredData(parsedTransactions);
      }
    });
  };
  useFocusEffect(useCallback(loadTransactions, []));

  if (!storedData) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={colors.primary} size="large" />
      </LoadingContainer>
    );
  }

  const categoryMap: CategoryMap = {
    Car: 0,
    Studies: 0,
    Food: 0,
    Salary: 0,
    Leisure: 0,
    Purchases: 0,
  };

  storedData.forEach(({ category, type, amount, date }) => {
    if (isSameMonth(new Date(date), currentDate)) {
      if (type === "income") {
        categoryMap[category] += Math.round(amount);
      } else {
        categoryMap[category] -= Math.round(amount);
      }
    }
  });

  const data = categories.map(({ name, color }) => ({
    name,
    amount: Math.abs(categoryMap[name]),
    color,
    legendFontColor: colors.text,
    legendFontSize: RFValue(16),
    legendFontFamily: fonts.bold,
  }));

  return (
    <Container>
      <Header>
        <Title>Transactions Summary</Title>
      </Header>
      <CurrentMonth {...{ currentDate, setCurrentDate }} />
      <PieChart
        {...{ data, width }}
        height={height * 0.25}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="8"
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
      <Categories {...{ categoryMap }} />
    </Container>
  );
};

export default Summary;
