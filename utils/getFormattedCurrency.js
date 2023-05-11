const currencyFormatter = new Intl.NumberFormat('th-TH');

export const getFormattedCurrency = (amount) =>
  currencyFormatter.format(amount);
