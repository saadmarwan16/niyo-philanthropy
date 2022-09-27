export const numberFormatter = Intl.NumberFormat("en", { notation: "compact" });

export const currencyFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  style: "currency",
  currency: "USD",
});
