import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { TextInputProps } from "react-native";

import Input from "../Input";

import { ErrorText, ErrorContainer, Icon } from "./styles";

interface InputControllerProps extends TextInputProps {
  control: Control;
  name: string;
  error: FieldError | undefined;
}

const InputController: React.FC<InputControllerProps> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <Controller
      {...{ control, name }}
      render={({ field: { onChange, value } }) => (
        <>
          <Input onChangeText={onChange} {...{ value }} {...rest} />
          {error && (
            <ErrorContainer>
              <Icon name="alert-triangle" />
              <ErrorText>{error.message}</ErrorText>
            </ErrorContainer>
          )}
        </>
      )}
    />
  );
};

export default InputController;
