import React, { useCallback, useMemo, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import { CategoryNames } from "../../utils/categories";
import InputController from "../../components/Forms/InputController";
import { TRANSACTIONS_KEY } from "../../global/constants";

import TransactionTypePicker, {
  TransactionType,
} from "./components/TransactionTypePicker";
import CategorySelect from "./components/CategorySelect";
import SelectCategory from "./components/SelectCategory";
import {
  Container,
  Form,
  Header,
  Title,
  TransactionTypePickerContainer,
} from "./styles";

interface FormValues {
  title: string;
  amount: string;
}

const RegisterTransaction: React.FC = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["90%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const [type, setType] = useState<TransactionType>("income");
  const [category, setCategory] = useState<CategoryNames | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        title: Yup.string().required(),
        amount: Yup.number()
          .typeError("Please provide a numeric value")
          .positive()
          .required(),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (category === null) {
      return Alert.alert("Please pick a category");
    }

    Object.assign(data, {
      id: uuid.v4(),
      type,
      category,
      date: new Date(),
    });

    try {
      const previousData = await AsyncStorage.getItem(TRANSACTIONS_KEY);

      if (previousData) {
        await AsyncStorage.setItem(
          TRANSACTIONS_KEY,
          JSON.stringify([...JSON.parse(previousData), data])
        );
      } else {
        await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify([data]));
      }
      setCategory(null);
      setType("income");
      reset();
      navigation.navigate("Dashboard");
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Register Transaction</Title>
        </Header>
        <Form>
          <InputController
            {...{ control }}
            name="title"
            placeholder="Title"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.title}
          />
          <InputController
            {...{ control }}
            name="amount"
            placeholder="Amount"
            keyboardType="numeric"
            error={errors.amount}
          />
          <TransactionTypePickerContainer>
            <TransactionTypePicker
              {...{ transactionType: type, setTransactionType: setType }}
              title="Income"
              type="income"
            />
            <TransactionTypePicker
              {...{ transactionType: type, setTransactionType: setType }}
              title="Outcome"
              type="outcome"
            />
          </TransactionTypePickerContainer>
          <CategorySelect
            onPress={handlePresentModalPress}
            title={category === null ? "Category" : category}
          />
          {/*@ts-ignore*/}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Form>
        <BottomSheetModal ref={bottomSheetModalRef} {...{ snapPoints }}>
          <SelectCategory {...{ bottomSheetModalRef, category, setCategory }} />
        </BottomSheetModal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegisterTransaction;
