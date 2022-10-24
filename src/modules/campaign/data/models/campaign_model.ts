// To parse this data:
//
//   import { Convert, CampaignModel } from "./file";
//
//   const campaignModel = Convert.toCampaignModel(json);

export interface CampaignModel {
  data: CampaignModelData;
  meta: Meta;
}

export interface CampaignModelData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title:         string;
  target:        number;
  amount_raised: number;
  createdAt:     Date;
  updatedAt:     Date;
  introduction:  string | null;
  body:          string;
  conclusion:    string | null;
  time_to_read:  number;
  slug:          string;
  image:         Image;
  category:      Category;
  footer:        Footer;
}

export interface Category {
  data: CategoryData;
}

export interface CategoryData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  title:       string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export interface Footer {
  data: FooterData | null;
}

export interface FooterData {
  id:         number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  description: string;
  email:       string;
  phone:       string;
  address:     string;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  id:         number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  url: string;
}

export interface Meta {
}

// Converts JSON strings to/from your types
export class ConvertCampaignModel {
  public static toCampaignModel(json: string): CampaignModel {
      return JSON.parse(json);
  }

  public static campaignModelToJson(value: CampaignModel): string {
      return JSON.stringify(value);
  }
}
