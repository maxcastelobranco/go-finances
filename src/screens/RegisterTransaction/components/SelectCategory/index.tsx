import React, { Dispatch, SetStateAction } from "react";
import { ListRenderItem } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import Button from "../../../../components/Button";
import {
  categories,
  CategoryData,
  CategoryNames,
} from "../../../../utils/categories";

import {
  Category,
  CategoryTitle,
  Container,
  Header,
  Icon,
  Separator,
  Title,
  Footer,
} from "./styles";

interface SelectCategoryProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  category: CategoryNames | null;
  setCategory: Dispatch<SetStateAction<CategoryNames | null>>;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({
  bottomSheetModalRef,
  category,
  setCategory,
}) => {
  const renderItem: ListRenderItem<CategoryData> = ({
    item: { name, iconName, color },
  }) => {
    const isActive = category === name;

    return (
      <Category
        {...{ isActive }}
        onPress={() => {
          if (isActive) {
            setCategory(null);
          } else {
            setCategory(name);
          }
        }}
      >
        <Icon name={iconName} {...{ color }} />
        <CategoryTitle>{name}</CategoryTitle>
      </Category>
    );
  };
  const keyExtractor = ({ name }: CategoryData) => name;

  return (
    <Container>
      <Header>
        <Title>Select Category</Title>
      </Header>
      <BottomSheetFlatList
        data={categories}
        {...{ renderItem, keyExtractor }}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Separator}
      />
      <Footer>
        <Button
          title="Confirm"
          onPress={() => bottomSheetModalRef.current?.close()}
        />
      </Footer>
    </Container>
  );
};

export default SelectCategory;
