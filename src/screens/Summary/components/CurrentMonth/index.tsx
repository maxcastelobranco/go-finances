import React, { Dispatch, SetStateAction } from "react";
import { add, format, sub } from "date-fns";

import { Container, ArrowContainer, Icon, CurrentMonthText } from "./styles";

interface CurrentMonthProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const CurrentMonth: React.FC<CurrentMonthProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  const currentDateFormatted = format(currentDate, "MMMM, y");
  const addOneMonth = () => {
    setCurrentDate((prevState) => add(prevState, { months: 1 }));
  };
  const subtractOneMonth = () => {
    setCurrentDate((prevState) => sub(prevState, { months: 1 }));
  };

  return (
    <Container>
      <ArrowContainer onPress={subtractOneMonth}>
        <Icon name="chevron-left" />
      </ArrowContainer>
      <CurrentMonthText>{currentDateFormatted}</CurrentMonthText>
      <ArrowContainer onPress={addOneMonth}>
        <Icon name="chevron-right" />
      </ArrowContainer>
    </Container>
  );
};

export default CurrentMonth;
