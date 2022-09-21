// To parse this data:
//
//   import { Convert, HomePageModel } from "./file";
//
//   const homePageModel = Convert.toHomePageModel(json);

export interface HomePageModel {
  data: HomePageModelData;
  meta: Meta;
}

export interface HomePageModelData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  slogan:              string;
  company_description: string;
  createdAt:           Date;
  updatedAt:           Date;
  campaigns:           Campaigns;
  footer:              Footer;
  about_us:            AboutUs;
  achievements:        Achievements;
  categories:          Categories;
  mission_and_vision:  MissionAndVision;
  making_difference:   MakingDifference;
}

export interface AboutUs {
  id:         number;
  who_we_are: string;
  what_we_do: string;
}

export interface Achievements {
  id:                      number;
  monthly_donation_amount: number;
  donations_received:      number;
  active_campaigns:        number;
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
  target:        number;
  amount_raised: number;
  createdAt:     Date;
  updatedAt:     Date;
  introduction:  null;
  body:          null;
  conclusion:    null;
  time_to_read:  null;
  image:         ImageClass;
}

export interface ImageClass {
  data: ImageData | null;
}

export interface ImageData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Categories {
  id:          number;
  title:       string;
  description: string;
  human:       string;
  medicine:    string;
  study:       string;
  food:        string;
}

export interface Footer {
  id:      number;
  phone:   string;
  email:   string;
  address: string;
}

export interface MakingDifference {
  id:          number;
  children:    string;
  medicine:    string;
  donation:    string;
  description: Description;
  image1:      Image1Class;
  image2:      Image1Class;
  image3:      Image1Class;
}

export interface Description {
  id:      number;
  content: string;
}

export interface Image1Class {
  data: Image1Data;
}

export interface Image1Data {
  id:         number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               Ext;
  mime:              Mime;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
}

export enum Ext {
  ExtJPG = ".JPG",
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  large:     Large;
  medium:    Large;
  small:     Large;
}

export interface Large {
  name:   string;
  hash:   string;
  ext:    Ext;
  mime:   Mime;
  path:   null;
  width:  number;
  height: number;
  size:   number;
  url:    string;
}

export enum Mime {
  Imagejpeg = "image/jpeg",
}

export interface MissionAndVision {
  id:          number;
  our_mission: string;
  our_vision:  string;
}

export interface Meta {
}

// Converts JSON strings to/from your types
export class ConvertPageModel {
  public static toHomePageModel(json: string): HomePageModel {
      return JSON.parse(json);
  }

  public static homePageModelToJson(value: HomePageModel): string {
      return JSON.stringify(value);
  }
}
