import React from "react";

import { categories } from "../../../../utils/categories";
import Category from "../Category";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { CategoryMap } from "../../index";

import { Container } from "./styles";

interface CategoryProps {
  categoryMap: CategoryMap;
}

const Categories: React.FC<CategoryProps> = ({ categoryMap }) => {
  return (
    <Container>
      {categories.map(({ name }) => {
        const color =
          categories.find((category) => category.name === name)?.color ||
          "#000";

        return (
          <Category
            key={name}
            title={name}
            amount={formatCurrency(categoryMap[name])}
            {...{ color }}
          />
        );
      })}
    </Container>
  );
};

export default Categories;
