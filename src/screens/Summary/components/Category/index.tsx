import React from "react";

import { Container, Title, Amount } from "./styles";

interface CategoryProps {
  title: string;
  amount: string;
  color: string;
}

const Category: React.FC<CategoryProps> = ({ title, amount, color }) => {
  const isNegative = amount.includes("-");

  return (
    <Container {...{ color }}>
      <Title>{title}</Title>
      <Amount {...{ isNegative }}>{amount}</Amount>
    </Container>
  );
};

export default Category;
