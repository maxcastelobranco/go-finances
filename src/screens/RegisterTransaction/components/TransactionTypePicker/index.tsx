import React, { Dispatch, SetStateAction } from "react";
import { PressableProps } from "react-native";

import { Container, Icon, Title } from "./styles";

export type TransactionType = "income" | "outcome";

interface TransactionTypePickerProps extends PressableProps {
  title: string;
  type: TransactionType;
  transactionType: TransactionType;
  setTransactionType: Dispatch<SetStateAction<TransactionType>>;
}

const TransactionTypePicker: React.FC<TransactionTypePickerProps> = ({
  title,
  type,
  transactionType,
  setTransactionType,
  ...rest
}) => {
  const iconName = type === "income" ? "arrow-up-circle" : "arrow-down-circle";
  const isActive = type === transactionType;

  return (
    <Container
      {...rest}
      {...{ isActive }}
      onPress={() => setTransactionType(type)}
    >
      <Icon name={iconName} {...{ type }} />
      <Title {...{ type }}>{title}</Title>
    </Container>
  );
};

export default TransactionTypePicker;
