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

export interface Image {
  data: ImageData | null;
}

export interface ImageData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
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
