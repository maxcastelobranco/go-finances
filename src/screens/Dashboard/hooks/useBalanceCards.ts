import { format } from "date-fns";

import { StoredTransaction } from "../index";
import { formatCurrency } from "../../../utils/formatCurrency";

const formatTransaction = "'Latest transaction on 'MMMM do, y";

export const useBalanceCards = (
  storedData: StoredTransaction[] | undefined
) => {
  const totalIncome =
    storedData?.reduce((acc, curr) => {
      return curr.type === "income" ? acc + curr.amount : acc;
    }, 0) || 0;
  const totalOutcome =
    storedData?.reduce((acc, curr) => {
      return curr.type === "outcome" ? acc + curr.amount : acc;
    }, 0) || 0;
  const currentBalance = totalIncome - totalOutcome;

  const latestIncomeTransaction = storedData?.find(
    ({ type }) => type === "income"
  );
  const latestOutcomeTransaction = storedData?.find(
    ({ type }) => type === "outcome"
  );
  const latestOverallTransaction = storedData && storedData[0];

  return {
    totalIncome: formatCurrency(totalIncome),
    totalOutcome: formatCurrency(totalOutcome),
    currentBalance: formatCurrency(currentBalance),
    latestIncomeTransaction: latestIncomeTransaction
      ? `${format(
          new Date(latestIncomeTransaction.date),
          formatTransaction
        )} (${latestIncomeTransaction.title})`
      : "No previous income transactions",
    latestOutcomeTransaction: latestOutcomeTransaction
      ? `${format(
          new Date(latestOutcomeTransaction.date),
          formatTransaction
        )} (${latestOutcomeTransaction.title})`
      : "No previous outcome transactions",
    latestOverallTransaction: latestOverallTransaction
      ? `${format(
          new Date(latestOverallTransaction.date),
          formatTransaction
        )} (${latestOverallTransaction.title})`
      : "No previous transactions",
  };
};
