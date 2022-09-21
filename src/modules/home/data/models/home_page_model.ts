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
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  slogan: string;
  company_description: string;
  createdAt: Date;
  updatedAt: Date;
  campaigns: Campaigns;
  footer: Footer;
  about_us: AboutUs;
  achievements: Achievements;
  categories: Categories;
  mission_and_vision: MissionAndVision;
  making_difference: MakingDifference;
}

export interface AboutUs {
  id: number;
  who_we_are: string;
  what_we_do: string;
}

export interface Achievements {
  id: number;
  monthly_donation_amount: number;
  donations_received: number;
  active_campaigns: number;
}

export interface Campaigns {
  data: Datum[];
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
  image?: ImageClass;
  __type?: string;
}

export interface ImageClass {
  data: ImageData | null;
}

export interface ImageData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Categories {
  id: number;
  title: string;
  description: string;
  human: string;
  medicine: string;
  study: string;
  food: string;
}

export interface Footer {
  data: FooterData;
}

export interface FooterData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface MakingDifference {
  id: number;
  children: string;
  medicine: string;
  donation: string;
  description: Description;
  image1: Image1Class;
  image2: Image1Class;
  image3: Image1Class;
}

export interface Description {
  id: number;
  content: string;
}

export interface Image1Class {
  data: Image1Data;
}

export interface Image1Data {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: Ext;
  mime: Mime;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  related: Campaigns;
}

export enum Ext {
  ExtJPG = ".JPG",
  Jpg = ".jpg",
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: Ext;
  mime: Mime;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum Mime {
  Imagejpeg = "image/jpeg",
}

export interface MissionAndVision {
  id: number;
  our_mission: string;
  our_vision: string;
}

export interface Meta {}

// Converts JSON strings to/from your types
export class ConvertHomeModel {
  public static toHomeModel(json: string): HomeModel {
    return JSON.parse(json);
  }

  public static homeModelToJson(value: HomeModel): string {
    return JSON.stringify(value);
  }
}
