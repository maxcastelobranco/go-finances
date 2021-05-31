export const formatCurrency = (n: number) => {
  return n >= 0
    ? `$${n
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
        .replace(".00", "")}`
    : `-$${
        n *
        -(1)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
          .replace(".00", "")
      }`;
};
