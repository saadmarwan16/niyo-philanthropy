import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../../constants/strings";

export const stripe = loadStripe(STRIPE_PK ?? "");

export default stripe;
