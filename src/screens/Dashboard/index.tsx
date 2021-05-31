import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { useFocusEffect } from "@react-navigation/native";

import { TRANSACTIONS_KEY } from "../../global/constants";
import { formatCurrency } from "../../utils/formatCurrency";
import { categories, CategoryNames } from "../../utils/categories";

import TransactionCard, {
  TransactionCardProps,
} from "./components/TransactionCard";
import BalanceCard from "./components/BalanceCard";
import {
  Container,
  Header,
  UserInfo,
  Avatar,
  UserGreeting,
  Greeting,
  Username,
  UserInfoWrapper,
  Icon,
  BalanceCardList,
  TransactionListContainer,
  TransactionListTitle,
  TransactionList,
} from "./styles";
import { useBalanceCards } from "./hooks/useBalanceCards";

export interface StoredTransaction
  extends Omit<TransactionCardProps, "amount" | "category"> {
  amount: number;
  category: CategoryNames;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<TransactionCardProps[]>();
  const [storedData, setStoredData] = useState<StoredTransaction[]>();

  const loadTransactions = () => {
    AsyncStorage.getItem(TRANSACTIONS_KEY).then((stringifiedTransactions) => {
      if (stringifiedTransactions !== null) {
        const parsedTransactions: StoredTransaction[] = JSON.parse(
          stringifiedTransactions
        );

        setStoredData(
          // @ts-ignore
          parsedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date))
        );

        setData(
          parsedTransactions.map((parsedTransaction) => {
            const category = categories.find(
              ({ name }) => name === parsedTransaction.category
            );
            return {
              ...parsedTransaction,
              amount: formatCurrency(parsedTransaction.amount),
              date: format(new Date(parsedTransaction.date), "MMM do, y"),
              category: {
                title: parsedTransaction.category,
                iconName: category?.iconName || "alert-triangle",
                color: category?.color || "#000",
              },
            };
          })
        );
      }
    });
  };

  useFocusEffect(useCallback(loadTransactions, []));

  const {
    totalIncome,
    totalOutcome,
    currentBalance,
    latestIncomeTransaction,
    latestOutcomeTransaction,
    latestOverallTransaction,
  } = useBalanceCards(storedData);

  return (
    <Container>
      <Header>
        <UserInfoWrapper>
          <UserInfo>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/22625386?v=4",
              }}
            />
            <UserGreeting>
              <Greeting>Hello,</Greeting>
              <Username>Max</Username>
            </UserGreeting>
          </UserInfo>
          <Icon name="power" />
        </UserInfoWrapper>
      </Header>
      <BalanceCardList>
        <BalanceCard
          title="Income"
          amount={totalIncome}
          lastTransaction={latestIncomeTransaction}
        />
        <BalanceCard
          title="Outcome"
          amount={totalOutcome}
          lastTransaction={latestOutcomeTransaction}
        />
        <BalanceCard
          title="Total"
          amount={currentBalance}
          lastTransaction={latestOverallTransaction}
        />
      </BalanceCardList>
      <TransactionListContainer>
        <TransactionListTitle>Transactions</TransactionListTitle>
        <TransactionList
          {...{ data }}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <TransactionCard {...item} />}
        />
      </TransactionListContainer>
    </Container>
  );
};

export default Dashboard;
