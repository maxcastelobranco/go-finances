import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryTitle,
  TransactionDate,
} from "./styles";

interface Category {
  iconName: string;
  title: string;
  color: string;
}

export interface TransactionCardProps {
  id: string;
  type: "income" | "outcome";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  title,
  amount,
  category,
  date,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount {...{ type }}>
        {type === "outcome" && "-"}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.iconName} color={category.color} />
          <CategoryTitle>{category.title}</CategoryTitle>
        </Category>
        <TransactionDate>{date}</TransactionDate>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
