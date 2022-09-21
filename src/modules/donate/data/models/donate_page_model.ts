// To parse this data:
//
//   import { Convert, DonatePageModel } from "./file";
//
//   const donatePageModel = Convert.toDonatePageModel(json);

export interface DonatePageModel {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  footer: Footer;
}

export interface Footer {
  id: number;
  phone: string;
  email: string;
  address: string;
  description: Description;
}

export interface Description {
  id: number;
  content: string;
}

export interface Meta {}

// Converts JSON strings to/from your types
export class ConvertDonatePageModel {
  public static toDonatePageModel(json: string): DonatePageModel {
    return JSON.parse(json);
  }

  public static donatePageModelToJson(value: DonatePageModel): string {
    return JSON.stringify(value);
  }
}
