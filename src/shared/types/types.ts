export type TProfileTab =
  | "profile"
  | "passwords"
  | "donations"
  | "subscriptions"
  | "wallet";

export type TDonationAmount =
  | "10"
  | "20"
  | "50"
  | "100"
  | "250"
  | "500"
  | "1000"
  | "Other";

export type TCheckoutMode = "payment" | "subscription";

export type TCheckoutSubmitType = "auto" | "pay" | "book" | "donate";

export type TCheckoutRecurringInterval = "day" | "week" | "month" | "year";
