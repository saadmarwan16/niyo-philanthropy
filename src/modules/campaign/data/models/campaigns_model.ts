// To parse this data:
//
//   import { Convert, CampaignsModel } from "./file";
//
//   const campaignsModel = Convert.toCampaignsModel(json);

export interface CampaignsModel {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title: string;
  target: number;
  amount_raised: number;
  createdAt: Date;
  updatedAt: Date;
  introduction: string;
  body: string;
  conclusion: string;
  time_to_read: number;
  slug: string;
  completed: boolean;
  image: Image;
  category: Category;
  footer: Footer;
}

export interface Category {
  data: CategoryData | null;
}

export interface CategoryData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Footer {
  data: FooterData;
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

export interface Image {
  data: ImageData | null;
}

export interface ImageData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}

// Converts JSON strings to/from your types
export class ConvertCampaignsModel {
  public static toCampaignsModel(json: string): CampaignsModel {
    return JSON.parse(json);
  }

  public static campaignsModelToJson(value: CampaignsModel): string {
    return JSON.stringify(value);
  }
}
