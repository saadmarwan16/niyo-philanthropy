// To parse this data:
//
//   import { Convert, DonatePageModel } from "./file";
//
//   const donatePageModel = Convert.toDonatePageModel(json);

export interface DonatePageModel {
  data: DonatePageModelData;
  meta: Meta;
}

export interface DonatePageModelData {
  id: number;
  attributes: PurpleAttributes;
  campaigns: Campaign[];
}

export interface PurpleAttributes {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  footer: Footer;
}

export interface Footer {
  data: FooterData | null;
}

export interface FooterData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface Campaign {
  id: number;
  title: string;
  image: Image | null;
}

export interface Image {
  id: number;
  url: string;
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
