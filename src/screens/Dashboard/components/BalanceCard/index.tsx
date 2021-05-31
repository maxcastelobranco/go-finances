import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface BalanceCardProps {
  title: "Income" | "Outcome" | "Total";
  amount: string;
  lastTransaction: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  lastTransaction,
}) => {
  const iconName =
    title === "Income"
      ? "arrow-up-circle"
      : title === "Outcome"
      ? "arrow-down-circle"
      : "dollar-sign";

  return (
    <Container {...{ title }}>
      <Header>
        <Title {...{ title }}>{title}</Title>
        <Icon name={iconName} {...{ title }} />
      </Header>
      <Footer>
        <Amount {...{ title }}>{amount}</Amount>
        <LastTransaction {...{ title }}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default BalanceCard;
