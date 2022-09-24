// To parse this data:
//
//   import { Convert, CheckoutSessionModel } from "./file";
//
//   const checkoutSessionModel = Convert.toCheckoutSessionModel(json);

export interface CheckoutSessionModel {
  id: string;
  object: string;
  after_expiration: null;
  allow_promotion_codes: null;
  amount_subtotal: number;
  amount_total: number;
  automatic_tax: AutomaticTax;
  billing_address_collection: null;
  cancel_url: string;
  client_reference_id: null;
  consent: null;
  consent_collection: null;
  currency: string;
  customer: string;
  customer_creation: string;
  customer_details: CustomerDetails;
  customer_email: string;
  expires_at: number;
  livemode: boolean;
  locale: null;
  metadata: Metadata;
  mode: string;
  payment_intent: string;
  payment_link: null;
  payment_method_collection: string;
  payment_method_options: Metadata;
  payment_method_types: string[];
  payment_status: string;
  phone_number_collection: PhoneNumberCollection;
  recovered_from: null;
  setup_intent: null;
  shipping: null;
  shipping_address_collection: null;
  shipping_options: any[];
  shipping_rate: null;
  status: string;
  submit_type: string;
  subscription: null;
  success_url: string;
  total_details: TotalDetails;
  url: null;
}

export interface AutomaticTax {
  enabled: boolean;
  status: null;
}

export interface CustomerDetails {
  address: Address;
  email: string;
  name: string;
  phone: null;
  tax_exempt: string;
  tax_ids: any[];
}

export interface Address {
  city: null;
  country: string;
  line1: null;
  line2: null;
  postal_code: string;
  state: null;
}

export interface Metadata {}

export interface PhoneNumberCollection {
  enabled: boolean;
}

export interface TotalDetails {
  amount_discount: number;
  amount_shipping: number;
  amount_tax: number;
}

// Converts JSON strings to/from your types
export class ConvertCheckoutSessionModel {
  public static toCheckoutSessionModel(json: string): CheckoutSessionModel {
    return JSON.parse(json);
  }

  public static checkoutSessionModelToJson(
    value: CheckoutSessionModel
  ): string {
    return JSON.stringify(value);
  }
}
