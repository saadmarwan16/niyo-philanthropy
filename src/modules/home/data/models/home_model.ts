// To parse this data:
//
//   import { Convert, HomeModel } from "./file";
//
//   const homeModel = Convert.toHomeModel(json);

export interface HomeModel {
  data: HomeModelData;
  meta: Meta;
}

export interface HomeModelData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  mission:                                string;
  vision:                                 string;
  slogan:                                 string;
  company_description:                    string;
  email:                                  string;
  phone_number:                           string;
  physical_address:                       string;
  categories_title:                       string;
  categories_description:                 string;
  making_difference_children_description: string;
  making_difference_medical_description:  string;
  making_difference_donation_description: string;
  categories_medicine_description:        string;
  categories_human_description:           string;
  categories_study_description:           string;
  categories_food_description:            string;
  createdAt:                              Date;
  updatedAt:                              Date;
  campaigns:                              Campaigns;
}

export interface Campaigns {
  data: Datum[];
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title:         string;
  description:   string;
  target:        number;
  amount_raised: number;
  createdAt:     Date;
  updatedAt:     Date;
  image:         Image;
}

export interface Image {
  data: ImageData | null;
}

export interface ImageData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Meta {
}

// Converts JSON strings to/from your types
export class ConvertHomeModel {
  public static toHomeModel(json: string): HomeModel {
      return JSON.parse(json);
  }

  public static homeModelToJson(value: HomeModel): string {
      return JSON.stringify(value);
  }
}
